import BaseAPI from "../base/baseAPI.js";

export default class User extends BaseAPI {
  async Create(email, password) {
    allure.addStep("Call user create");
    let body = {
      email: email,
      password: password,
    };    
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
    allure.addStep("Call user GetBasket");
    return await super.AuthGET(`rest/basket/${this.bid}`, this.token);
  }
}
