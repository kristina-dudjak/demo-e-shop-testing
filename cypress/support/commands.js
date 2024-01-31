import loginPage from "../pages/user/loginPage"

Cypress.Commands.add("login", () => {
  cy.session("userSession", () => {
    cy.visit("customer/account/login")
    cy.fixture("user.json").then((user) => {
      loginPage.inputEmail(user.email)
      loginPage.inputPassword(user.password)
      loginPage.submitLogin()
      loginPage.elements
        .welcomeMsg()
        .should("include.text", 'Welcome')
    })
  })
})

Cypress.Commands.add("openItemPage", () => {
  cy.visit("")
  cy.get("#search").click().type("shirt{enter}")
  cy.get("ol.product-items")
    .find("li")
    .first()
    .find(".product-item-link")
    .as("productLink")
  cy.get("@productLink").then((productLink) => {
    const productName = productLink.text().trim()
    const url = productLink.attr("href")
    cy.wrap(productLink).click()
    cy.get('[data-ui-id="page-title-wrapper"]').should("have.text", productName)
    cy.url().should("equal", url)
  })
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
