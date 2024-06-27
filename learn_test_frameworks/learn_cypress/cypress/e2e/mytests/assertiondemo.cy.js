/// <reference types = "cypress"/>
it('Assertions Demo', () => {
    cy.visit('https://example.cypress.io/')
    cy.contains('get').click()
    cy.get('#query-btn')
        .should('contain', 'Button') // Check if the text written in the browser is a button.
        .should('have.class', 'query-btn btn btn-primary') // Checks if the button has the correct class name.
        .should('be.visible') // In place of should you may use and.
        .should('be.enabled')
    expect(true).to.be.true

})