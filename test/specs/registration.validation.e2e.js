import registrationPage from "../../pages/registration.page.js"

describe('Registration', () => {
    it('User does not enter any inputs on registration page', async () => {
        // registration page
        await registrationPage.open();

        await registrationPage.emailInput.click();
        await registrationPage.passwordInput.click();
        await registrationPage.passwordRepeat.click();
        await registrationPage.passwordAdvice.click();
        await registrationPage.questionDropdown.open();
        await registrationPage.questionDropdown.close();
        await registrationPage.securityAnswer.click();
        await registrationPage.registerButton.click();

        await expect($('#mat-error-0')).toBeExisting();
        await expect($('#mat-error-0')).toHaveTextContaining('Please provide an email address.');

        await expect($('#mat-error-1')).toBeExisting();
        await expect($('#mat-error-1')).toHaveTextContaining('Please provide a password.');

        await expect($('#mat-error-2')).toBeExisting();
        await expect($('#mat-error-2')).toHaveTextContaining('Please repeat your password.');

        await expect($$('//mat-password-strength-info/mat-card/mat-card-content/div')).toBeElementsArrayOfSize(5);

        await expect($('#mat-error-3')).toBeExisting();
        await expect($('#mat-error-3')).toHaveTextContaining('Please select a security question.');

        await expect($('#mat-error-4')).toBeExisting();
        await expect($('#mat-error-4')).toHaveTextContaining('Please provide an answer to your security question.');
    });
});