import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Twitter button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openTwitter();

    const twitterElement = $('//div[@data-testid="UserName"]//span');
    await twitterElement.waitForExist();
    await expect(await browser.getUrl()).toMatch("https://twitter.com/owasp_juiceshop");
    await expect(twitterElement).toHaveTextContaining("OWASP Juice Shop");
  });
});
