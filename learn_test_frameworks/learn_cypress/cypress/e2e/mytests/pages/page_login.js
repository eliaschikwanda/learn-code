export class LogInPage {
    userNameTextbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input';
    passwordTextbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input';
    logInButton = '.oxd-button';
    enterUsername(userName) {
        cy.get(this.userNameTextbox).type(userName)    
    }

    enterPassword(password) {
        cy.get(this.passwordTextbox).type(password)
    }

    clickLogIn() {
        cy.get(this.logInButton).click()
    }
}