export default class BasePage {
    async open(page) {
        await browser.url(`${browser.options.baseUrl}/#/${page}`);
    }
}