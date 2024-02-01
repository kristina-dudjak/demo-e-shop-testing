import headerPage from "../../pages/shared/HeaderPage"

describe("Header tests", () => {
  it("Sign out logged in user", () => {
    //tag: smoke?
    cy.login()
    cy.visit("/")
    cy.awaitRequest()
    headerPage.openMenu()
    headerPage.clickSignOut()
    cy.url().should(($url) => {
      expect($url.includes("login") || $url.includes("logoutSuccess")).to.be
        .true
    })
  })
})
