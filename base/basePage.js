import Button from "../elements/button.js";

export default class BasePage {
  get closePopupBtn() {
    return new Button($("button.close-dialog"), "Dismiss Popup");
  }

  async open(page) {
    await browser.url(`${browser.options.baseUrl}/#/${page}`);
    await this.waitForPageAvailable();
    if (await this.closePopupBtn.isExisting()) {
      await this.closePopupBtn.click();
    }
  }

  async waitForPageAvailable() {
    await browser.waitUntil(async () => await this.baseElem.waitForExist());
  }

  async switchToWindowWithTitle(windowTitle) {
    let currentWindow = await browser.getWindowHandle();
    for (let handle of await browser.getWindowHandles()) {
      await browser.switchToWindow(handle);
      if ((await browser.getTitle()) == windowTitle) {
        return true;
      }
    }

    await browser.switchToWindow(currentWindow);
    throw new Error(`Window with title "${windowTitle}" was not found`);
  }

  async switchToAnotherWindow() {
    let currentWindow = await browser.getWindowHandle();
    for (let handle of await browser.getWindowHandles()) {      
      if (handle != currentWindow) {
        return await browser.switchToWindow(handle);
      }
    }
    throw new Error(`No other windows were found`);
  }  
}
