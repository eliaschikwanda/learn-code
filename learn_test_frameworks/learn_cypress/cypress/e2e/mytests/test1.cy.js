/// <reference types = "cypress"/>

it('Google Search', () => { // 'Google Search' is the title of the test.
    cy.visit('https://google.com') // Use cy as a command as it contains the cypress methods use visit with the url as the argument.
    cy.get('#APjFqb').type('Who is Elias Chikwanda?{Enter}') // Get the identifier on the search bar and populate it the {Enter} Simulate the keyboard and press enter.
    //cy.get('.FPdoLc > center > .gNO89b').click() --> one way to select the button and press enter

})