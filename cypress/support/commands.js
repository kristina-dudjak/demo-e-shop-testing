import loginPage from "../pages/user/loginPage"
import homePage from "../pages/homePage"

Cypress.Commands.add("login", () => {
  cy.session("userSession", () => {
    cy.visit("customer/account/login")
    cy.fixture("user.json").then((user) => {
      loginPage.inputEmail(user.email)
      loginPage.inputPassword(user.password)
      loginPage.submitLogin()
      loginPage.elements.welcomeMsg().should("include.text", "Welcome")
    })
  })
})

Cypress.Commands.add("openItemPage", () => {
  cy.visit("")
  homePage.searchProducts("shirt")
  homePage.correctProductLinkAndPage()
})

Cypress.Commands.add("awaitRequest", () => {
  cy.intercept(
    "GET",
    "/pub/static/version*/frontend/Magento/luma/en_US/Magento_Captcha/template/checkout/captcha.html"
  ).as("captchaRequest")
  cy.wait("@captchaRequest")
})

Cypress.Commands.add("awaitUiRequest", () => {
  cy.intercept(
    "GET",
    "/pub/static/version*/frontend/Magento/luma/en_US/Magento_Ui/templates/collection.html"
  ).as("collectionRequest")
  cy.wait("@collectionRequest")
})

Cypress.on("uncaught:exception", (err, runnable) => {
  return false
})
