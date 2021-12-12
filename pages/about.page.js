import BasePage from '../base/basePage.js'
import Button from '../elements/button.js'

class AboutPage extends BasePage {
    get baseElem() {
        return this.presskitBtn;
    }

    get twitterBtn() {
        return new Button($('//a[contains(@aria-label,"Twitter")]'), 'Twitter button');
    }

    get facebookBtn() {
        return new Button($('//a[contains(@aria-label,"Facebook")]'), 'Facebook button');
    }

    get slackBtn() {
        return new Button($('//a[contains(@aria-label,"Slack")]'), 'Slack button');
    }

    get redditBtn() {
        return new Button($('//a[contains(@aria-label,"Reddit")]'), 'Reddit button');
    }

    get presskitBtn() {
        return new Button($('//a[contains(@aria-label,"PressKit")]'), 'PressKit button');
    }

    async open() {
        await super.open('about');
    }

    async openTwitter() {
        await this.twitterBtn.click();
        await browser.switchWindow('twitter');
    }

    async openFacebook() {
        await this.facebookBtn.click();
        await browser.switchWindow('facebook');
    }

    async openSlack() {
        await this.slackBtn.click();
        await browser.switchWindow('slack');
    }

    async openReddit() {
        await this.redditBtn.click();
        await browser.switchWindow('reddit.com');
    }

    async openPresskit() {
        await this.presskitBtn.click();
        await browser.switchWindow('github');
    }
}

export default new AboutPage();