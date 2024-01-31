import forgotPasswordPage from "../../pages/user/forgotPasswordPage"

describe("Forgot password page tests", () => {
  beforeEach(() => {
    cy.visit("customer/account/forgotpassword")
  })
  it("Shows forgot password page title", () => {
    forgotPasswordPage.elements
      .forgotPasswordTitle()
      .should("have.text", "Forgot Your Password?")
  })
  it("Display required errors for empty form submit", () => {
    forgotPasswordPage.submitForm()
    forgotPasswordPage.elements
      .emptyFormError()
      .should("include.text", "Please enter your email.")
  })
  it("Display error for invalid email", () => {
    cy.awaitRequest()
    forgotPasswordPage.inputEmail("a")
    forgotPasswordPage.submitForm()
    forgotPasswordPage.elements
      .emailInputError()
      .should(
        "have.text",
        "Please enter a valid email address (Ex: johndoe@domain.com)."
      )
  })
  it("Display success message for valid forgot password input", () => {
    cy.fixture("user.json").then((user) => {
      forgotPasswordPage.inputEmail(user.email)
      forgotPasswordPage.submitForm()
      forgotPasswordPage.elements
        .successMessage()
        .should(
          "include.text",
          `If there is an account associated with ${user.email} you will receive an email with a link to reset your password.`
        )
    })
  })
})
