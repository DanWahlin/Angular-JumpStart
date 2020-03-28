describe("Customers", () => {
    beforeEach(() => {
      cy.visit("/customers");
    });
  
    it("should display 10 customers", () => {
      cy.get('.card').should('have.length', 10);
    });

    it("should filter and display 10 customers", () => {
        cy.wait(200); // pause to let cards load
        cy.get('[name="filter"]').type('ze');
        cy.get('.card').should('have.length', 1);
    });

    it("should navigate to page 3", () => {
        cy.get('.pagination > :nth-child(4) > a').click();
        cy.get('.card').should('have.length', 2);
    });

    it("should display list view", () => {
        // Click List View
        cy.get('.navbar > .nav > :nth-child(2) > a').click();
        cy.get('tr').should('have.length.gt', 5);
    });

    it("should display map view", () => {
        // Click Map View
        cy.get('.navbar > .nav > :nth-child(3) > a').click();
        cy.get('cm-map').should('exist');
    });

    it("should click New Customer and navigate to login", () => {
        // Click New Customer
        cy.get('.navbar > .nav > :nth-child(4) > a').click();
        cy.url().should('include', '/login');
    });

    
  });