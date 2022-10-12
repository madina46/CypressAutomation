/// <reference types="cypress" />
describe("Page accessibility tests", () => {
    beforeEach(() => {
      cy.visit('https://color.a11y.com/?wc3');
      cy.injectAxe();
    });
    
    it("Should have no accessibility violations",() => {
      cy.checkA11y();
    });
});