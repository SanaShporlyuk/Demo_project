import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";

class BasketPage extends BasePage{
  get baseElem() {
    return this.checkoutBtn;
  }

  get checkoutBtn() {
    return new Button($("#checkoutButton"), "Checkout");
  }

  async open() {
    allure.addStep("Navigate to basket");
    await super.open("basket");
  }
}
export default new BasketPage();