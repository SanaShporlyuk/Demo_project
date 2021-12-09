import BaseElement from "../base/baseElements.js";

export default class Input extends BaseElement {
    async setValue(value) {
       await this.wdioElement.setValue(value);

    };
};