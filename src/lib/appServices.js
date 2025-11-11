import axios from 'axios';

export default class AppService {
  static API_BASE = "http://localhost:8000"; 

  // Configure axios instance with default settings
  static axiosInstance = axios.create({
    baseURL: this.API_BASE,
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  static handleAxiosError(error) {
    if (error.response) {
      throw new Error(`HTTP ${error.response.status}: ${error.response.data || error.message}`);
    } else if (error.request) {
      throw new Error('Network error: No response received');
    } else {
      throw new Error(`Request error: ${error.message}`);
    }
  }

  static async getWebsiteGallery() {
    try {
      const response = await this.axiosInstance.get('/images/websiteId/1');


      console.log("There are data: ", response)

      return response.data || [];
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error);
      }
      return [];
    }
  }

  static async getCarousel() {
    try {
      const response = await this.axiosInstance.get('/carousel/websiteId/1');
      return response.data.items || [];
    } catch (error) {
      console.error("AppService.getCarousel error:", error);
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error);
      }
      return [];
    }
  }

  static async healthCheck() {
    try {
      const response = await this.axiosInstance.get('/health', {
        timeout: 5000
      });
      
      return response.data.status === "OK";
    } catch (error) {
      console.error("AppService.healthCheck error:", error);
      return false;
    }
  }

  // Get packages
  static async getWebsitePackages() {
    try {
      const response = await this.axiosInstance.get('/packages/public/website/1');
      return response.data || [];
    } catch (error) {
      console.error("AppService.getPackages error:", error);
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error);
      }
      return [];
    }
  }

  static async getRegulations() {
    try {
      const response = await this.axiosInstance.get('/regulations');
console.log("Regulations response:", response);

      return response.data || [];
    } catch (error) {
      console.error("AppService.getRegulations error:", error);
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error);
      }
      return [];
    }
  }

  // Generic GET method for any endpoint
  static async getData(endpoint) {
    try {
      const response = await this.axiosInstance.get(endpoint);
      return response.data;
    } catch (error) {
      console.error(`AppService.getData error for ${endpoint}:`, error);
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error);
      }
      return null;
    }
  }

  // POST method for future use
  static async postData(endpoint, data) {
    try {
      const response = await this.axiosInstance.post(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`AppService.postData error for ${endpoint}:`, error);
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error);
      }
      return null;
    }
  }

  // PUT method for future use
  static async putData(endpoint, data) {
    try {
      const response = await this.axiosInstance.put(endpoint, data);
      return response.data;
    } catch (error) {
      console.error(`AppService.putData error for ${endpoint}:`, error);
      if (axios.isAxiosError(error)) {
        this.handleAxiosError(error);
      }
      return null;
    }
  }
}