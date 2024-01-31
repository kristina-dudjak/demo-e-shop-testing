class LoginPage {
  elements = {
    loginPageTitle: () => cy.get('[data-ui-id="page-title-wrapper"]'),
    loginButton: () => cy.get("#send2"),
    emailInput: () => cy.get("#email"),
    passwordInput: () => cy.get("#pass"),
    emailInputError: () => cy.get("#email-error"),
    passwordInputError: () => cy.get("#pass-error"),
    invalidLoginError: () => cy.get('[data-ui-id="message-error"]'),
    registerRedirect: () => cy.get(".create"),
    forgotPasswordRedirect: () => cy.get(".remind"),
    welcomeMsg: () => cy.get(".logged-in"),
  }

  submitLogin() {
    this.elements.loginButton().should("be.visible").and("be.enabled").click()
  }

  inputEmail(email) {
    this.elements.emailInput().type(email)
  }

  inputPassword(password) {
    this.elements.passwordInput().type(password)
  }
}

export default new LoginPage()
