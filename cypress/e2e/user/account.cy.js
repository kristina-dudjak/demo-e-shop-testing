describe("Customer account page tests", () => {
    beforeEach(() => {
        cy.login()
    })
    it('Shows account page title', () => {
        cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'My Account')
    })
    it('Displays correct contact information', () => {
        cy.get('.box-content').should('include.text', 'johnny.doe@gmail.com', 'John Doe')
    })
    it('Navigates to user information edit page', () => {
        cy.get('.edit').should(($el) => {
            expect($el.attr('href')).to.include('edit')
          })
    })
    it('Navigates to user change password page', () => {
        cy.get('.edit').should(($el) => {
            expect($el.attr('href')).to.include('changepass')
          })
    })
    it('Navigates to customer address page', () => {
        cy.get('.edit').should(($el) => {
            expect($el.attr('href')).to.include('add')
          })
    })
    it('Navigates to customer address edit page', () => {
        cy.get('.edit').should(($el) => {
            expect($el.attr('href')).to.include('edit')
          })
    })
    
  })
  