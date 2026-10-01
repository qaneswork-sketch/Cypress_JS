// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (email, password) => {
        //cy.visit(Cypress.env('CYPRESS_BASE_URL'));
        //cy.visit('https://guest:welcome2qauto@qauto.forstudy.space');
        cy.visit('/')
    
        cy.get('button')
        .contains('Sign In')
        .should('be.visible')
        .click();

        cy.get('.modal-title')
        .contains('Log in')
        .should('be.visible');

        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password, {sensitive: true});

        cy.get('button')
        .contains('Login')
        .should('be.visible')
        .click();

        cy.url().should('include', '/panel/garage');
        cy.get('button')
        .contains('Add car')
        .should('be.visible');
    
});