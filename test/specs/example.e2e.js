describe('My Login application', () => {
    before(() => {
        // runs once before the first test in this block        
        console.log('Mocka Before: Starting test cases');
    });

    it('should login with valid credentials', async () => {
        await browser.url(`${browser.options.baseUrl}/login`);

        await $('#username').setValue('tomsmith');
        await $('#password').setValue('SuperSecretPassword!');
        await $('button[type="submit"]').click();

        await expect($('#flash')).toBeExisting();
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });

    after(() => {
        // runs once after the last test in this block
        console.log('Mocka After: The end');
    });    
});

