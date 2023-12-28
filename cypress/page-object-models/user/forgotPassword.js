class ForgotPassword {

    elements = {
        forgotPasswordTitle : () => cy.get('[data-ui-id="page-title-wrapper"]'),
        submitButton : () => cy.get('.submit'),
        emailInput : () => cy.get('#email_address'),
        emailInputError : () => cy.get('#email_address-error'),
        emptyFormError : () => cy.get('[data-ui-id="message-error"]'),
        successMessage : () => cy.get('[data-ui-id="message-success"]')
    }

    submitForm() {
        this.elements.submitButton().click()
    }

    inputEmail (email) {
        this.elements.emailInput().type(email)
    }
}

export default new ForgotPassword()