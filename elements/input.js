import BaseElement from "../base/baseElement.js";

export default class Input extends BaseElement {
  async click() {
    await allure.addStep(`Click on "${this.elementname}" input`);
    await super.click();
  }

  async setValue(value) {
    await allure.addStep(`Set "${this.elementname}" value`);
    await this.wdioElement.setValue(value);
  }
}
