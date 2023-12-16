describe("Forgot password page tests", () => {
    beforeEach(() => {
        cy.visit('customer/account/forgotpassword')
    })
    it('Shows forgot password page title', () => {
        cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'Forgot Your Password?')
    })
    it('Display required errors for empty form submit', () => {
        cy.get('.submit').click()
        cy.get('[data-ui-id="message-error"]').should('include.text', 'Please enter your email.')
    })
    it('Display error for invalid email', () => {
        cy.get('#email_address').type('a{enter}')
        cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display success message for valid forgot password input', () => {
        cy.get('#email_address').type('johndoe@domain.com{enter}')
        cy.get('[data-ui-id="message-success"]').should('include.text', 'If there is an account associated with johndoe@domain.com you will receive an email with a link to reset your password.')
    })
  })
  