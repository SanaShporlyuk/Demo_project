import BaseElement from '../base/baseElement.js';

export default class Input extends BaseElement {
    async setValue(value) {
        await this.wdioElement.setValue(value);
    };
};