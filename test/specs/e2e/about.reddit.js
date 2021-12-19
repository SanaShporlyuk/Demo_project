import aboutPage from "../../../pages/about.page.js";

describe("SideMenu/AboutUs", () => {
  it("Verify Reddit button", async () => {
    // about page
    await aboutPage.open();

    await aboutPage.openReddit();

    await expect(await browser.getUrl()).toMatch("https://www.reddit.com/r/owasp_juiceshop/");
    await expect($("//h1")).toBeExisting();
    await expect($("//h1")).toHaveTextContaining("owasp_juiceshop");
  });
});
