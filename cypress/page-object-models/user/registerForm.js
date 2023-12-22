class RegisterForm {

    elements = {
        registerPageTitle : () => cy.get('[data-ui-id="page-title-wrapper"]'),
        registerButton : () => cy.get('.submit'),
        emailInput : () => cy.get('#email_address'),
        passwordInput : () => cy.get('#password'),
        passwordConfirmationInput : () => cy.get('#password-confirmation'),
        passwordStrengthMeterLevel : () => cy.get('#password-strength-meter-label'),
        firstNameInputError : () => cy.get('#firstname-error'),
        lastNameInputError : () => cy.get('#lastname-error'),
        emailInputError : () => cy.get('#email_address-error'),
        passwordInputError : () => cy.get('#password-error'),
        passwordConfirmationInputError : () => cy.get('#password-confirmation-error'),
    }

    submitRegistration() {
        this.elements.registerButton().click()
    }

    inputEmail(email) {
        this.elements.emailInput().type(email)
    }

    inputPassword(password) {
        this.elements.passwordInput().type(password)
    }

    inputPasswordConfirmation(passwordConfirmation) {
        this.elements.passwordConfirmationInput().type(passwordConfirmation)
    }
}

export default new RegisterForm()