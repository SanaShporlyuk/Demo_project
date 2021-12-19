import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Twitter button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openTwitter();

    await expect(await browser.getUrl()).toMatch("https://twitter.com/owasp_juiceshop");
    await expect($('//div[@data-testid="UserName"]//span')).toBeExisting();
    await expect($('//div[@data-testid="UserName"]//span')).toHaveTextContaining("OWASP Juice Shop");
  });
});
