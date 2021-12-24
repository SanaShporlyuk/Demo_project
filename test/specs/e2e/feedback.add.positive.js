import { Chance } from "chance";
import User from "../../../api/user.js";
import mainPage from "../../../pages/main.page.js";
import feedbackPage from "../../../pages/feedback.page.js";
import loginPage from "../../../pages/login.page.js";

describe("Feedback flow", () => {
  const user = new User();
  const chance = new Chance();
  const email = chance.email();
  const password = "blabla3#_";

  before(async () => {
    const response = await user.Create(email, password);
    expect(response.statusCode).toHaveValue(201);
  });

  it("Add feedback", async () => {
    await loginPage.open();
    await loginPage.login(email, password);

    await mainPage.waitForPageAvailable();
    await mainPage.sidenavBtn.click();
    await mainPage.contactBtn.click();

    await feedbackPage.waitForPageAvailable();
    await feedbackPage.commentInput.setValue("test comment");
    await feedbackPage.ratingElem.click();

    let captcha_result = eval(await $('#captcha').getText());
    await feedbackPage.captchaInput.setValue(captcha_result);
    await feedbackPage.submitBtn.click();

    await $('//span[contains(text(),"Thank you for your feedback.")]').waitForExist();
    await expect($('//span[contains(text(),"Thank you for your feedback.")]')).toBeDisplayed();    
  });
});