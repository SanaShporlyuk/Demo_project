import AllureReporter from "@wdio/allure-reporter";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";

class LoginPage extends BasePage {
  get baseElem() {
    return this.loginBtn;
  }

  get emailInput() {
    return new Input($("#email"), "Email");
  }

  get passwordInput() {
    return new Input($("#password"), "Password");
  }

  get loginBtn() {
    return new Button($("#loginButton"), "Login");
  }

  get error() {
    return $(".error");
  }

  async open() {
    allure.addStep("Navigate to login");
    await super.open("login");
  }

  async login(email, password) {
    await allure.startStep(`Logging in with ${email} / ${password}`);
    await this.emailInput.setValue(`${email}`);
    await this.passwordInput.setValue(`${password}`);
    await this.loginBtn.click();
    await allure.endStep(`passed`);
  }
}

export default new LoginPage();
