//  //strong[@itemprop="name"]
import aboutPage from "../../pages/about.page.js"

describe('SideMenu/AboutUs', () => {
    it('Verify Press Kit button', async () => {
        // about page
        await aboutPage.open();

        await aboutPage.openPresskit();
        await browser.pause(3000);

        await expect(await browser.getUrl()).toMatch('https://github.com/OWASP/owasp-swag');
        await expect($('//strong[@itemprop="name"]')).toBeExisting();
        await expect($('//strong[@itemprop="name"]')).toHaveTextContaining('owasp-swag');
    });  
});