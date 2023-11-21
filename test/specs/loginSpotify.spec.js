const { expect } = require('@wdio/globals');
const LoginPage = require('../pageObjects/login.page');

describe('Test Login form', () => {
  beforeEach(async () => {
    await browser.url('https://open.spotify.com/');
  });
  
    // it('should display error messages with empty credentials', async () => {
    //   await LoginPage.login('', '');
    //   expect(LoginPage.errorMessage.getText()).toBe('Incorrect username or password');
    // });

    // it('should display error message with incorrect credentials', async () => {
    //     await LoginPage.login('incorrectusername', 'incorrectpassword');
    //     expect(LoginPage.errorMessage.getText()).toBe('Incorrect username or password.');
    // });

    it('should successfully log in with correct credentials', async () => {
        await LoginPage.login('lina_h64@hotmail.com', 'Epamtest123');

        const profile = await $('figure[data-testid="user-widget-avatar"]');
        const profileName = await profile.getAttribute('title');
        expect(profileName).toBe('Lina H');
    });
});
