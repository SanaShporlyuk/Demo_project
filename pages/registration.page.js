import BasePage from '../base/basePage.js'
import Button from '../elements/button.js';
import Checkbox from '../elements/checkbox.js';
import Dropdown from '../elements/dropdown.js';
import Input from '../elements/input.js'

class RegistrationPage extends BasePage {
    get baseElem() {
        return this.questionDropdown;
    }

    get emailInput() {
        return new Input($('#emailControl'), 'Email input');
    }

    get passwordInput() {
        return new Input($('#passwordControl'), 'Password input');
    }

    get passwordRepeat() {
        return new Input($('#repeatPasswordControl'), 'Repead password');
    }

    get passwordAdvice() {
        return new Checkbox($('.mat-slide-toggle-bar'), "Show password advice checkbox");        
    }

    get questionDropdown() {
        return new Dropdown($('[name="securityQuestion"]'), 'Security question');
    }

    get securityAnswer() {
        return new Input($('#securityAnswerControl'), 'Security answer input');
    }    

    get registerButton() {
        return new Button($('#registerButton'), 'Register button');
    }

    async open() {
        await super.open('register');
    }
}

export default new RegistrationPage();