import forgotPassword from "../../page-object-models/user/forgotPassword"

describe("Forgot password page tests", () => {
    beforeEach(() => {
        cy.visit('customer/account/forgotpassword')
    })
    it('Shows forgot password page title', () => {
        forgotPassword.elements.forgotPasswordTitle().should('have.text', 'Forgot Your Password?')
    })
    it('Display required errors for empty form submit', () => {
        forgotPassword.submitForm()
        forgotPassword.elements.emptyFormError().should('include.text', 'Please enter your email.')
    })
    it('Display error for invalid email', () => {
        forgotPassword.inputEmail('a{enter}')
        forgotPassword.elements.emailInputError().should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display success message for valid forgot password input', () => {
        forgotPassword.inputEmail('johndoe@domain.com{enter}')
        forgotPassword.elements.successMessage().should('include.text', 'If there is an account associated with johndoe@domain.com you will receive an email with a link to reset your password.')
    })
  })
  