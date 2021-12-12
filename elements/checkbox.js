import BaseElement from '../base/baseElement.js';

export default class Checkbox extends BaseElement {
    async click() {
        await this.wdioElement.click();
    }
};