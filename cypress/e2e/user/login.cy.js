import loginPage from "../../pages/user/loginPage"

describe("Login page tests", () => {
  beforeEach(() => {
    cy.visit("customer/account/login")
  })
  it("Login with valid credentials", () => {
    // tag: smoke
    cy.login()
  })
  it("Shows login page title", () => {
    loginPage.elements.loginPageTitle().should("have.text", "Customer Login")
  })
  it("Redirect to register", () => {
    loginPage.elements.registerRedirect().should(($el) => {
      expect($el.attr("href")).to.include("create")
    })
  })
  it("Display required errors for empty form submit", () => {
    cy.awaitRequest()
    loginPage.submitLogin()
    loginPage.elements
      .emailInputError()
      .should("have.text", "This is a required field.")
    loginPage.elements
      .passwordInputError()
      .should("have.text", "This is a required field.")
  })
  it("Display error for invalid email", () => {
    cy.awaitRequest()
    loginPage.inputEmail("a")
    loginPage.submitLogin()
    loginPage.elements
      .emailInputError()
      .should(
        "have.text",
        "Please enter a valid email address (Ex: johndoe@domain.com)."
      )
  })
  it("Display error for incorrect login", () => {
    cy.awaitRequest()
    loginPage.inputEmail("mail@gmail.com")
    loginPage.inputPassword("a")
    loginPage.submitLogin()
    loginPage.elements
      .invalidLoginError()
      .should(
        "include.text",
        "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
      )
  })
  it("Redirect to forgot password", () => {
    loginPage.elements.forgotPasswordRedirect().should(($el) => {
      expect($el.attr("href")).to.include("forgotpassword")
    })
  })
})
