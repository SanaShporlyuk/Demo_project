import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Facebook button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openFacebook();

    const facebookElement = $('//a[@ href = "https://www.facebook.com/owasp.juiceshop/"]/span[contains(text(), "OWASP Juice Shop")]');
    await facebookElement.waitForExist();  
    await expect(await browser.getUrl()).toMatch("https://www.facebook.com/owasp.juiceshop");
    await expect(facebookElement).toHaveTextContaining("OWASP Juice Shop");
  });
});
