import Button from "../elements/button.js";

export default class BasePage {
    get closePopupBtn() {
        return new Button ($('button.close-dialog'), "Dismiss popup");
    };

    async open(page) {
        await browser.url(`${browser.options.baseUrl}/#/${page}`);
    };
}