const { expect } = require('@wdio/globals');
const LoginPage = require('../pageObjects/login.page');

describe('Test Login', () => {
    beforeEach(async () => {
        await browser.url('https://open.spotify.com/');
    });

    describe('Login with Empty Credentials', () => {
        it('should display error message when login with empty credentials', async () => {
            await LoginPage.btnLoginFirst.click();
            await LoginPage.btnLogin.click();

            const errorMessage = await $('span.Message-sc-15vkh7g-0').getText();
            expect(errorMessage).toContain('Nombre de usuario o contraseña incorrectos');
        });
    });

    describe('Login with Incorrect Credentials', () => {
        it('should display error message when login with incorrect credentials', async () => {
            await LoginPage.login('linah', '23');

            const errorMessage = await $('span.Message-sc-15vkh7g-0').getText();
            expect(errorMessage).toContain('Nombre de usuario o contraseña incorrectos');
        });
    });

    describe('Login with Correct Credentials', () => {
        it('should successfully log in with correct credentials', async () => {
            await LoginPage.login('lina_h64@hotmail.com', 'Epamtest123');

            const profile = await $('figure[data-testid="user-widget-avatar"]');
            const profileName = await profile.getAttribute('title');
            expect(profileName).toBe('Lina H');
        });
    });
});
