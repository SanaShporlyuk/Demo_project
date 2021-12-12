import Button from "../elements/button.js";

export default class BasePage {
    get baseElem() { }

    get closePopupBtn() {
        return new Button($('button.close-dialog'), 'Dismiss popup');
    };

    async open(page) {
        await browser.url(`${browser.options.baseUrl}/#/${page}`);
        await this.waitForPageAvailable();
        if (await this.closePopupBtn.isExisting()) {
            await this.closePopupBtn.click();
        }
    };

    async waitForPageAvailable() {
        await browser.waitUntil(
            async () => {
                const elem = await this.baseElem;
                return elem.isExisting() && elem.isDisplayed();
            }
        );
    };

    async switchToWindowWithTitle(windowTitle) {
        let currentWindow = await browser.getWindowHandle();
        for (let handle of await browser.getWindowHandles()) {
            await browser.switchToWindow(handle);
            if (await browser.getTitle() == windowTitle) {
                return true;
            }
        }

        await browser.switchToWindow(currentWindow);
        throw new Error(`Window with title "${windowTitle}" was not found`);
    }
}