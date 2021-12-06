class AboutPage {
    async open() {
        await browser.url(`${browser.options.baseUrl}/#/about`);
    }
}

export default new AboutPage();