import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Reddit button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openReddit();

    const redditElement = $("//h1");
    await redditElement.waitForExist();
    await expect(await browser.getUrl()).toMatch("https://www.reddit.com/r/owasp_juiceshop");
    await expect(redditElement).toHaveTextContaining("owasp_juiceshop");
  });
});
