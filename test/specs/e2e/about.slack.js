import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Slack button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openSlack();

    const slackElement = $("//h4");
    await slackElement.waitForExist();
    await expect(await browser.getUrl()).toMatch("https://owasp.org/slack/invite");
    await expect(slackElement).toHaveTextContaining("Slack community");
  });
});
