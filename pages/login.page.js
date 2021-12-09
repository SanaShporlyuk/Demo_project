import BasePage from '../base/basePage.js'
import Button from '../elements/button.js'
import Input from '../elements/input.js'

class LoginPage extends BasePage {
    get emailInput() {
        return new Input($('#email'), 'Email input');
    }

    get passwordInput() {
        return new Input($('#password'), 'Password input');
    }

    get loginBtn() {
        return new Button($('#loginButton'), 'Login button');
    }

    get error() {
        return $('.error');
    }

    async open() {
        await super.open('login');
    }

    async login(email, password) {
        await this.emailInput.setValue(`${email}`);
        await this.passwordInput.setValue(`${password}`);
        await this.loginBtn.click();
    }
}

export default new LoginPage();