/// <reference types="Cypress" />

describe('Terminal', () => {
    it('should open the pseudo-terminal on the main page', () => {
        cy.log('Displaying the terminal')
        cy.visit('/')
        cy.wait(1500)
        cy.get('p[class=terminal]').find('span[class=init]').should("have.text", "package")
    });
});