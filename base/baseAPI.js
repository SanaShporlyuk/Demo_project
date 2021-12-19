import superagent from "superagent";

export default class BaseAPI {
  async GET(path) {
    try {
      allure.addStep(`GET to ${browser.options.baseUrl}/${path}`);
      return await superagent.get(`${browser.options.baseUrl}/${path}`);
    } catch (error) {
      allure.addStep(`GET failed with ${error.response.statusCode}`);
      return error.response;
    }
  }

  async POST(path, body) {
    try {
      allure.addStep(`POST to ${browser.options.baseUrl}/${path} with ${JSON.stringify(body)}`);
      return await superagent.post(`${browser.options.baseUrl}/${path}`).send(body);
    } catch (error) {
      allure.addStep(`POST failed with ${error.response.statusCode}`);
      return error.response;
    }
  }

  async AuthGET(path, token) {
    try {
      allure.addStep(`Authorized GET to ${browser.options.baseUrl}/${path}`);
      return await superagent.get(`${browser.options.baseUrl}/${path}`).set("Authorization", `Bearer ${token}`);
    } catch (error) {
      allure.addStep(`Authorized GET failed with ${error.response.statusCode}`);
      return error.response;
    }
  }

  async AuthPOST(path, body, token) {
    try {
      allure.addStep(`Authorized POST to ${browser.options.baseUrl}/${path} with ${JSON.stringify(body)}`);
      return await superagent.post(`${browser.options.baseUrl}/${path}`).send(body).set("Authorization", `Bearer ${token}`);
    } catch (error) {
      allure.addStep(`Authorized POST failed with ${error.response.statusCode}`);
      return error.response;
    }
  }
}
