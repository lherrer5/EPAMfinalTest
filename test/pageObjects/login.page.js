const { $ } = require('@wdio/globals');

class LoginPage {
    get inputUsername() { 
        return $('#login-username'); }

    get inputPassword() { 
        return $('#formImputIcon'); }

    get btnLogin() { 
        return $('#login-button'); }
    
    get rememberBtnLogin() { 
        return $('#login-remember'); }

    get closeCookies() { 
        return $('#buttonPrimary'); }
    
    get errorMessage() { 
        return $('#username-error'); }

    async login(username, password) {
        await this.closeCookies.click();
        await this.btnLogin.click();
        await this.rememberBtnLogin.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.scrollIntoView();
        await this.btnLogin.click();
    }
}

module.exports = new LoginPage();
