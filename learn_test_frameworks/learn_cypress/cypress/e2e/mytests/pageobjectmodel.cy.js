/// <reference types = "cypress"/>

import { LogInPage} from "./pages/page_login"
var logInPage = new LogInPage

it('Page Object Model Demo', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    logInPage.enterUsername('Admin')
    logInPage.enterPassword('admin123')
    logInPage.clickLogIn()
    
})