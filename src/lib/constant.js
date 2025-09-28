import AppService from "../lib/appServices";

async function fetchNewsData() {
  const Data = await AppService.getWebsitePackages();
  return Data;
}

const News = await fetchNewsData();

console.log("News Data:", News);

export const NewsData = News
