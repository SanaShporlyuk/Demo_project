import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Slack button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openSlack();

    await expect(await browser.getUrl()).toMatch("https://owasp.org/slack/invite");
    await expect($("//h4")).toBeExisting();
    await expect($("//h4")).toHaveTextContaining("Slack community");
  });
});
