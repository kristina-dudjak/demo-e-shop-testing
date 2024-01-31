import accountPage from "../../pages/user/accountPage"

describe("Customer account page tests", () => {
  beforeEach(() => {
    cy.login()
    cy.visit("customer/account/")
  })
  it("Shows account page title", () => {
    accountPage.elements.accountTitle().should("have.text", "My Account")
  })
  it("Displays correct contact information", () => {
    cy.fixture("user.json").then((user) => {
      accountPage.elements
        .userInformation()
        .should(
          "include.text",
          `${user.email}`,
          `${user.firstname} ${user.lastname}`
        )
    })
  })
  it("Navigates to user information edit page", () => {
    accountPage.elements.editAccountRedirect().should(($el) => {
      expect($el.attr("href")).to.include("edit")
    })
  })
  it("Navigates to user change password page", () => {
    accountPage.elements.changePasswordRedirect().should(($el) => {
      expect($el.attr("href")).to.include("changepass")
    })
  })
  it("Navigates to customer address page", () => {
    accountPage.elements.customerAddressRedirect().should(($el) => {
      expect($el.attr("href")).to.include("add")
    })
  })
  it("Navigates to customer address edit page", () => {
    accountPage.elements.customerAddressEditRedirect().should(($el) => {
      expect($el.attr("href")).to.include("edit")
    })
  })
})
