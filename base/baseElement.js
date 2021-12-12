export default class BaseElement {
    constructor(wdioElement, name) {
        this.wdioElement = wdioElement;
        this.elementname = name;
    };

    async click() {
        console.log(`Click on element "${this.elementname}"`);
        await this.wdioElement.click();
    };

    async isExisting() {
        return await this.wdioElement.isExisting();
    }

    async isDisplayed() {
        return await this.wdioElement.isDisplayed();
    }

    async waitForExist() {
        return await this.wdioElement.waitForExist();
    }
}