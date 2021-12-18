import BasePage from '../base/basePage.js'
import Button from '../elements/button.js'

class MainPage extends BasePage {
    get baseElem() {
        return this.accountMenuBtn;
    }

    get accountMenuBtn() {
        return new Button($('#navbarAccount'), 'Account Menu');
    }

    get loginBtn() {
        return new Button($('#navbarLoginButton'), 'Login');
    }

    async open() {
        await super.open('');
    }

    async openAccountMenu() {
        await this.accountMenuBtn.click();
    }

    async navigateToLogin() {
        await this.loginBtn.click();
    };
}

export default new MainPage();