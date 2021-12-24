import BasePage from "../base/basePage.js";
import Button from "../elements/button.js";

class AboutPage extends BasePage {
  get baseElem() {
    return this.presskitBtn;
  }

  get twitterBtn() {
    return new Button($('//a[contains(@aria-label,"Twitter")]'), "Twitter");
  }

  get facebookBtn() {
    return new Button($('//a[contains(@aria-label,"Facebook")]'), "Facebook");
  }

  get slackBtn() {
    return new Button($('//a[contains(@aria-label,"Slack")]'), "Slack");
  }

  get redditBtn() {
    return new Button($('//a[contains(@aria-label,"Reddit")]'), "Reddit");
  }

  get presskitBtn() {
    return new Button($('//a[contains(@aria-label,"PressKit")]'), "PressKit");
  }

  async open() {
    allure.addStep("Navigate to about");
    await super.open("about");
  }

  async openTwitter() {
    await this.twitterBtn.click();
    await super.switchToAnotherWindow();
  }

  async openFacebook() {
    await this.facebookBtn.click();
    await super.switchToAnotherWindow();
  }

  async openSlack() {
    await this.slackBtn.click();
    await super.switchToAnotherWindow();
  }

  async openReddit() {
    await this.redditBtn.click();     
    await super.switchToAnotherWindow();
  }

  async openPresskit() {
    await this.presskitBtn.click();
    await super.switchToAnotherWindow();
  }
}

export default new AboutPage();
