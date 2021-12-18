import BaseElement from '../base/baseElement.js';
import Button from './button.js';

export default class Dropdown extends BaseElement {
    async open() {
        await allure.addStep(`Open "${this.elementname}" dropdown`);
        await super.click();
    }

    async close() {
        await browser.keys(['Escape']);
    }

    async select(option) {        
        await this.open();
        await allure.addStep(`Select "${option}" in "${this.elementname}"`);
        await new BaseElement($(`//*[@class="mat-option-text"][contains(text(), "${option}")]`), `Question "${option}"`).click();
    }
};