import BaseAPI from "../base/baseAPI.js";

export default class User extends BaseAPI {
  async Create(body) {
    allure.addStep("Call create user API");
    return await super.POST("api/Users", body);
  }

  async Login(email, password) {
    await allure.startStep(`Login with ${email} / ${password}`);
    let body = {
      email: email,
      password: password,
    };
    let response = await super.POST("rest/user/login", body);
    if (response.statusCode === 200) {
      this.bid = response.body.authentication.bid;
      this.token = response.body.authentication.token;
    }
    await allure.endStep(`passed`);
    return response;
  }

  async GetBasket() {
    allure.addStep("Call get basket for authenticated user");
    return await super.AuthGET(`rest/basket/${this.bid}`, this.token);
  }
}
