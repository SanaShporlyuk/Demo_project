import superagent from "superagent";

export default class BaseAPI {
  async GET(url) {
    try {
      allure.addStep(`Get to ${browser.options.baseUrl}/${url}`);
      return await superagent.get(`${browser.options.baseUrl}/${url}`);
    } catch (error) {
      return error.response;
    }
  }

  async POST(url, body) {
    try {
      allure.addStep(`Post to ${browser.options.baseUrl}/${url} with ${body}`);
      return await superagent.post(`${browser.options.baseUrl}/${url}`, body);
    } catch (error) {
      return error.response;
    }
  }
}
