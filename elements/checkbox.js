import BaseElement from '../base/baseElement.js';

export default class Checkbox extends BaseElement {
    async click() {
        await allure.addStep(`Click on "${this.elementname}" checkbox`);
        await super.click();
    }
};