import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Facebook button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openFacebook();

    await expect(await browser.getUrl()).toMatch(
      "https://www.facebook.com/owasp.juiceshop"
    );
    await expect(
      $(
        '//a[@ href = "https://www.facebook.com/owasp.juiceshop/"]/span[contains(text(), "OWASP Juice Shop")]'
      )
    ).toBeExisting();
    await expect(
      $(
        '//a[@ href = "https://www.facebook.com/owasp.juiceshop/"]/span[contains(text(), "OWASP Juice Shop")]'
      )
    ).toHaveTextContaining("OWASP Juice Shop");
  });
});
