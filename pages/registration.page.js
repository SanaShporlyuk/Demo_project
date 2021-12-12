import BasePage from '../base/basePage.js'
import Button from '../elements/button.js'
import Dropdown from '../elements/dropdown.js';

class RegistrationPage extends BasePage {
    get questionDropdown() {
        return new Dropdown($('[name="securityQuestion"]'), 'Security question');
    }

    async open() {
        await super.open('registration');
    }
}

export default new RegistrationPage();