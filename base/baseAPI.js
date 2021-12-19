import superagent from "superagent";

export default class BaseAPI {
  async GET(url) {
    try {
      allure.addStep(`GET to ${browser.options.baseUrl}/${url}`);
      return await superagent.get(`${browser.options.baseUrl}/${url}`);
    } catch (error) {
      return error.response;
    }
  }

  async POST(url, body) {
    try {
      allure.addStep(`POST to ${browser.options.baseUrl}/${url} with ${JSON.stringify(body)}`);
      return await superagent.post(`${browser.options.baseUrl}/${url}`, body);
    } catch (error) {
      return error.response;
    }
  }

  async AuthGET(url, token) {
    try {
      allure.addStep(`Authorized GET to ${browser.options.baseUrl}/${url}`);
      return await superagent.get(`${browser.options.baseUrl}/${url}`).set("Authorization", `Bearer ${token}`);
    } catch (error) {
      return error.response;
    }
  }

  async AuthPOST(url, body, token) {
    try {
      allure.addStep(`Authorized POST to ${browser.options.baseUrl}/${url} with ${JSON.stringify(body)}`);
      return await superagent.post(`${browser.options.baseUrl}/${url}`, body).set("Authorization", `Bearer ${token}`);
    } catch (error) {
      return error.response;
    }
  }  
}
