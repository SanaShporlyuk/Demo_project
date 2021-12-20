import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";

class MainPage extends BasePage {
  get baseElem() {
    return this.accountMenuBtn;
  }

  get accountMenuBtn() {
    return new Button($("#navbarAccount"), "Account Menu");
  }

  get loginBtn() {
    return new Button($("#navbarLoginButton"), "Login");
  }

  get sidenavBtn() {
    return new Button($('//button[contains(@aria-label,"Open Sidenav")]'), "Open Sidenav");
  }

  get contactBtn() {
    return new Button($('//a[contains(@aria-label,"Go to contact us page")]'), "Customer Feedback");
  }

  get basketBtn() {
    return new Button($('//button[contains(@aria-label,"shopping cart")]'), "Your Basket");
  }

  get addToBasketBtn() {
    return new Button($('//button[contains(@aria-label,"Add to Basket")]'), "Add to Basket");
  }

  async open() {
    allure.addStep("Navigate to home");
    await super.open("");
  }

  async openAccountMenu() {
    await this.accountMenuBtn.click();
  }

  async navigateToLogin() {
    await this.loginBtn.click();
  }
}

export default new MainPage();
