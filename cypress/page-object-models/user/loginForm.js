class LoginForm {

    elements = {
        loginPageTitle : () => cy.get('[data-ui-id="page-title-wrapper"]'),
        loginButton : () => cy.get('#send2'),
        emailInput : () => cy.get('#email'),
        passwordInput : () => cy.get('#pass'),
        emailInputError : () => cy.get('#email-error'),
        passwordInputError : () => cy.get('#pass-error'),
        invalidLoginError : () => cy.get('[data-ui-id="message-error"]'),
        registerRedirect : () => cy.get('.create'),
        forgotPasswordRedirect : () => cy.get('.remind')
    }

    submitLogin() {
        this.elements.loginButton().click()
    }

    inputEmail(email) {
        this.elements.emailInput().type(email)
    }

    inputPassword(password) {
        this.elements.passwordInput().type(password)
    }


}

export default new LoginForm()