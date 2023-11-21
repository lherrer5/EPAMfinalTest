const { $ } = require('@wdio/globals');

class LoginPage {
    get inputUsername() { 
        return $('#login-username'); }

    get inputPassword() { 
        return $('#login-password'); }

    get btnLoginFirst() { 
        return $('[data-testid="login-button"]'); }

    get btnLogin() { 
        return $('#login-button');}
        
    get rememberBtnLogin() { 
        return $('.Wrapper-sc-16y5c87-0'); }
        
    get errorMessage() { 
        return $('#username-error'); }


    async login(username, password) {
        await this.btnLoginFirst.click();
        await this.inputUsername.scrollIntoView()
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.rememberBtnLogin.waitForClickable({ timeout: 5000 });
        await this.rememberBtnLogin.click();
        await this.btnLogin.scrollIntoView();
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
