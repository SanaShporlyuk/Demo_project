import BaseElement from '../base/baseElement.js';

export default class Button extends BaseElement {
    async click() {
        await allure.addStep(`Click on "${this.elementname}" button`);
        await super.click();
    }
};