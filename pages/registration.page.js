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
        return new Input($('#emailControl'), 'Email');
    }

    get passwordInput() {
        return new Input($('#passwordControl'), 'Password');
    }

    get passwordRepeat() {
        return new Input($('#repeatPasswordControl'), 'Repeat Password');
    }

    get passwordAdvice() {
        return new Checkbox($('.mat-slide-toggle-bar'), "Show Password Advice");
    }

    get questionDropdown() {
        return new Dropdown($('[name="securityQuestion"]'), 'Security Question');
    }

    get securityAnswer() {
        return new Input($('#securityAnswerControl'), 'Security Answer');
    }

    get registerButton() {
        return new Button($('#registerButton'), 'Register');
    }

    async open() {
        allure.addStep('Navigate to registration');
        await super.open('register');
    }
}

export default new RegistrationPage();