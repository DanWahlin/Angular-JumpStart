describe("Login", () => {
    beforeEach(() => {
      // If we're logged in ensure we log out
      cy.visit("/");
      cy.get('[data-cy="login-logout"]').click();
      cy.visit("/login");
    });
  
    it("should login user", () => {
      cy.get('[name="email"]').type('test@test.com');
      cy.get('[name="password').type('password1');
      cy.get('.btn-success').click();  
      cy.url().should('include', '/customers');
    });

    it("should show errors with invalid email or password", () => {
        const emailSelector = '[name="email';
        const passwordSelector = '[name="password"]';
        cy.get(emailSelector).type('test');
        cy.get(emailSelector).blur();
        cy.get('[data-cy="email-error"]').should('contain', 'A valid email address is required');
        cy.get(passwordSelector).type('pwd');
        cy.get(passwordSelector).blur();
        cy.get('[data-cy="password-error"]').should('contain', 'Password is required');
    });
    
  });