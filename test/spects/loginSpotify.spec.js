const { expect, browser, $ } = require ('@wdio/globals');
const LoginPage = require('../pageObjects/login.page');

describe('Test Login form', () => {

  const loginPage = new LoginPage();

  it('should display error messages with empty credentials', async () => {
    // Open the login page
    await browser.get('https://open.spotify.com/');

    // Enter any credentials
    await loginPage.inputUsername.setValue('testuser');
    await loginPage.inputPassword.setValue('testpassword');

    // Clear the inputs
    await loginPage.inputUsername.clear();
    await loginPage.inputPassword.clear();

    // Click the login button
    await loginPage.btnLogin.click();

    // Check the error messages
    expect(loginPage.errorMessage.getText()).toBe('Please enter your username or email address.');
    expect(loginPage.errorMessage.getText()).toBe('Please enter your password.');
  });

  it('should display error message when incorrect credentials are entered', async () => {
    // Open the login page
    await browser.get('hhttps://open.spotify.com/');

    // Enter incorrect credentials
    await loginPage.inputUsername.setValue('incorrectusername');
    await loginPage.inputPassword.setValue('incorrectpassword');

    // Click the login button
    await loginPage.btnLogin.click();

    // Check the error message
    expect(loginPage.errorMessage.getText()).toBe('Incorrect username or password.');
  });

  it('should successfully log in and display correct name', async () => {
    // Open the login page
    await browser.get('https://open.spotify.com/');

    // Enter correct credentials
    await loginPage.inputUsername.setValue('lina_h64@hotmail.com');
    await loginPage.inputPassword.setValue('Testemap123');

    // Click the login button
    await loginPage.btnLogin.click();

    // Check that the name is correct
    expect(loginPage.errorMessage.getText()).toBe('Correct User');
  });
});
