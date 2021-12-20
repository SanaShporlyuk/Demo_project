import BaseElement from "../base/baseElement.js";
import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";

class FeedbackPage extends BasePage {
  get baseElem() {
    return this.submitBtn;
  }

  get submitBtn() {
    return new Button($("#submitButton"), "Submit");
  }

  get commentInput() {
    return new Input($("#comment"), "Comment");
  }

  get captchaInput() {
    return new Input($("#captchaControl"), "Captcha");
  }

  get ratingElem() {
    return new BaseElement($("#rating"), "Rating");
  }    

  async open() {
    allure.addStep("Navigate to feedback");
    await super.open("contact");
  }
}
export default new FeedbackPage();