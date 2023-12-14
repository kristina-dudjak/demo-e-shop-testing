describe("Login page tests", () => {
    beforeEach(() => {
        cy.visit('customer/account/login')
    })
    it('Shows login page title', () => {
        cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'Customer Login')
    })
    it('Redirect to register', () => {
        cy.get('.create').should(($el) => {
            expect($el.attr('href')).to.include('create')
          })
    })
    it('Display required errors for empty form submit', () => {
        cy.get('#send2').click()
        cy.get('#email-error').should('have.text', 'This is a required field.')
        cy.get('#pass-error').should('have.text', 'This is a required field.')
    })
    it('Display error for invalid email', () => {
        cy.get('#email').type('a')
        cy.get('#send2').click()
        cy.get('#email-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display error for incorrect login', () => {
        cy.get('#email').type('mail@gmail.com')
        cy.get('#pass').type('a')
        cy.get('#send2').click()
        cy.get('[data-ui-id="message-error"]').should('include.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Redirect to forgot password', () => {
        cy.get('.remind').should(($el) => {
            expect($el.attr('href')).to.include('forgotpassword')
          })
    })
  })
  