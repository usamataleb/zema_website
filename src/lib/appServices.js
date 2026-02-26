import axios from "axios";
import { API_BASE } from "./constant";

export class AppServiceError extends Error {
  constructor(message, statusCode, originalError) {
    super(message);
    this.name = "AppServiceError";
    this.statusCode = statusCode;
    this.originalError = originalError;
    this.timestamp = new Date().toISOString();
  }
}

const AXIOS_CONFIG = {
  baseURL: API_BASE,
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

// Logger utility
const logger = {
  info: (message, data) => console.log(`[AppService] INFO: ${message}`, data),
  warn: (message, data) => console.warn(`[AppService] WARN: ${message}`, data),
  error: (message, error) =>
    console.error(`[AppService] ERROR: ${message}`, error),
  debug: (message, data) =>
    console.debug(`[AppService] DEBUG: ${message}`, data),
};

export default class AppService {
  static axiosInstance = axios.create(AXIOS_CONFIG);

  // Request interceptor for logging and auth
  static initialize() {
    this.axiosInstance.interceptors.request.use(
      (config) => {
        logger.debug(
          `Making ${config.method?.toUpperCase()} request to ${config.url}`,
        );
        return config;
      },
      (error) => {
        logger.error("Request interceptor error", error);
        return Promise.reject(error);
      },
    );

    // Response interceptor for common handling
    this.axiosInstance.interceptors.response.use(
      (response) => {
        logger.debug(`Received response for ${response.config.url}`, {
          status: response.status,
          data: response.data,
        });
        return response;
      },
      (error) => {
        logger.error("Response interceptor error", error);
        return Promise.reject(error);
      },
    );
  }

  static handleAxiosError(error) {
    const { response, request, message } = error;

    if (response) {
      const errorMessage =
        response.data?.message || message || "Unknown server error";
      throw new AppServiceError(
        `HTTP ${response.status}: ${errorMessage}`,
        response.status,
        error,
      );
    } else if (request) {
      throw new AppServiceError(
        "Network error: No response received from server",
        "NETWORK_ERROR",
        error,
      );
    } else {
      throw new AppServiceError(
        `Request configuration error: ${message}`,
        "REQUEST_ERROR",
        error,
      );
    }
  }

  // Generic request handler with retry logic
  static async makeRequest(method, endpoint, data = null, options = {}) {
    const maxRetries = options.retries || 0;
    let lastError;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const config = {
          method,
          url: endpoint,
          ...options,
        };

        if (data) {
          config.data = data;
        }

        const response = await this.axiosInstance(config);
        return response.data;
      } catch (error) {
        lastError = error;

        if (error.response?.status >= 400 && error.response?.status < 500) {
          break;
        }

        if (attempt < maxRetries) {
          const delay = Math.min(1000 * Math.pow(2, attempt), 30000);
          logger.warn(
            `Request failed, retrying in ${delay}ms (attempt ${attempt + 1}/${maxRetries + 1})`,
          );
          await new Promise((resolve) => setTimeout(resolve, delay));
          continue;
        }
      }
    }

    if (axios.isAxiosError(lastError)) {
      this.handleAxiosError(lastError);
    }
    throw lastError;
  }

  static async getData(endpoint, options = {}) {
    try {
      return await this.makeRequest("get", endpoint, null, options);
    } catch (error) {
      logger.error(`Failed to fetch data from ${endpoint}`, error);
      return null;
    }
  }
}

export const getData = AppService.getData.bind(AppService);

AppService.initialize();

import { useState, useEffect } from "react";

export const useFetchData = (endpoint) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getData(endpoint);
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          console.error(`Failed to fetch data from ${endpoint}:`, err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [endpoint]);

  return { data, loading, error };
};
