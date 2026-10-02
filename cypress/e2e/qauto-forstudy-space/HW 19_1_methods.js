class RegistrationPage {
    
    visit() {
      cy.visit('/');
    }
  
    openRegistrationForm() {
      cy.get('button')
      .contains('Sign up')
      .should('be.visible')
      .click()
      .get('.modal-title')
      .contains('Registration')
      .should('be.visible');
    }
  
    fillName(name) {
      cy.get('input[name="name"]').type(name);
    }
  
    fillLastName(lastName) {
      cy.get('input[name="lastName"]').type(lastName);
    }
  
    fillEmail(email) {
      cy.get('input[name="email"]').type(email);
    }
  
    fillPassword(password) {
      cy.get('input[name="password"]').type(password), {sensitive: true};
    }
  
    fillRepeatPassword(password) {
      cy.get('input[name="repeatPassword"]').type(password), {sensitive: true};
    }
  
    registration() {
      cy.get('button')
      .contains('Register')
      .should('be.visible')
      .click();
    }
  
    checkErrorMessage(message) {
      cy.contains(message).should('be.visible')
      .and('have.css', 'color', 'rgb(220, 53, 69)');
    }

    checkDifferentError(message) {
        cy.contains(message).should('be.visible');
      }
  
    checkButtonDisabled() {
      cy.get('button')
      .contains('Register')
      .should('be.disabled');
    }

    clearField(field) {
    cy.get(field).clear();
    }

    changeFocus() {
        cy.get('.modal-title').click();
    }

    checkRedirect() {
        cy.url().should('include', '/panel/garage');
        cy.get('button')
        .contains('Add car')
        .should('be.disabled');
    }

    LogOut() {
        cy.get('button')
        .contains(' My profile ')
        .should('be.visible')
        .click();
        cy.get('button')
        .contains('Logout')
        .should('be.visible')
        .click();
        cy.get('button')
        .contains('Sign up')
        .should('be.visible');
    }

  }
  
  export default new RegistrationPage();
  