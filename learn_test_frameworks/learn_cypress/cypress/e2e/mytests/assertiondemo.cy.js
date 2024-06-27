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
    assert.equal(3,3,"They're equal")
    assert.equal(4,'4', "Still pass although data types are different")
    assert.strictEqual(4,'4', "Will not pass because data types are different")
})