import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Press Kit button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openPresskit();

    const presskitElement = $('//strong[@itemprop="name"]');
    await presskitElement.waitForExist();
    await expect(await browser.getUrl()).toMatch("https://github.com/OWASP/owasp-swag");
    await expect(presskitElement).toHaveTextContaining("owasp-swag");
  });
});
