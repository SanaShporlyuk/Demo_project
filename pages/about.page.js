import BasePage from "../base/basePage.js"

class AboutPage extends BasePage {
    get twitterBtn() {
        return $('//a[contains(@aria-label,"Twitter")]');
    }

    get facebookBtn() {
        return $('//a[contains(@aria-label,"Facebook")]');
    }

    get slackBtn() {
        return $('//a[contains(@aria-label,"Slack")]');
    }
    
    get redditBtn() {
        return $('//a[contains(@aria-label,"Reddit")]');
    }

    get presskitBtn() {
        return $('//a[contains(@aria-label,"PressKit")]');
    }

    async open() {
        await super.open('about');
        await super.closePopupBtn.click();
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
        await browser.switchWindow('reddit');        
    }

    async openPresskit() {
        await this.presskitBtn.click();
        await browser.switchWindow('github'); 
    }
}

export default new AboutPage();