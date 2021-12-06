class LoginPage {
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
        await browser.url(`${browser.options.baseUrl}/#/login`);
    }

    async login(email, password) {
        await this.emailInput.setValue(`${email}`);
        await this.passwordInput.setValue(`${password}`);
        await this.loginBtn.click();
    }
}

export default new LoginPage();