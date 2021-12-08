import BasePage from "../base/basePage.js"

class LoginPage extends BasePage {
    get emailInput() {
        return $('#email');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginBtn() {
        return $('#loginButton');
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