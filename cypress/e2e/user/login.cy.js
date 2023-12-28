import loginForm from "../../page-object-models/user/loginForm"

describe("Login page tests", () => {
    beforeEach(() => {
        cy.visit('customer/account/login')
    })
    it('Shows login page title', () => {
        loginForm.elements.loginPageTitle().should('have.text', 'Customer Login')
    })
    it('Redirect to register', () => {
        loginForm.elements.registerRedirect().should(($el) => {
            expect($el.attr('href')).to.include('create')
          })
    })
    it('Display required errors for empty form submit', () => {
        loginForm.submitLogin()
        loginForm.elements.emailInputError().should('have.text', 'This is a required field.')
        loginForm.elements.passwordInputError().should('have.text', 'This is a required field.')
    })
    it('Display error for invalid email', () => {
        loginForm.inputEmail('a{enter}')
        loginForm.elements.emailInputError().should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display error for incorrect login', () => {
        loginForm.inputEmail('mail@gmail.com')
        loginForm.inputPassword('a{enter}')
        loginForm.elements.invalidLoginError().should('include.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
    })
    it('Redirect to forgot password', () => {
        loginForm.elements.forgotPasswordRedirect().should(($el) => {
            expect($el.attr('href')).to.include('forgotpassword')
          })
    })
  })
  