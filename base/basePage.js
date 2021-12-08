export default class BasePage {
    get closePopupBtn() {
        return $('button.close-dialog');
    }

    async open(page) {
        await browser.url(`${browser.options.baseUrl}/#/${page}`);
    }
}