describe('Робота з користувачами', () => {
    before('Open website', () => {
        cy.visit('/');
      });

    it('Log in on website', () => {
      cy.get('.header').find('button').should('be.visible');
      cy.get('.col-md-6').find('[href]').should('be.visible');
    });
});


