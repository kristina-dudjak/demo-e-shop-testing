import account from "../../page-object-models/user/account"

describe("Customer account page tests", () => {
    beforeEach(() => {
        cy.login()
    })
    it('Shows account page title', () => {
        account.elements.accountTitle().should('have.text', 'My Account')
    })
    it('Displays correct contact information', () => {
        account.elements.userInformation().should('include.text', 'johnny.doe@gmail.com', 'John Doe')
    })
    it('Navigates to user information edit page', () => {
        account.elements.editAccountRedirect().should(($el) => {
            expect($el.attr('href')).to.include('edit')
          })
    })
    it('Navigates to user change password page', () => {
        account.elements.changePasswordRedirect().should(($el) => {
            expect($el.attr('href')).to.include('changepass')
          })
    })
    it('Navigates to customer address page', () => {
        account.elements.customerAddressRedirect().should(($el) => {
            expect($el.attr('href')).to.include('add')
          })
    })
    it('Navigates to customer address edit page', () => {
        account.elements.customerAddressEditRedirect().should(($el) => {
            expect($el.attr('href')).to.include('edit')
          })
    })
    
  })
  