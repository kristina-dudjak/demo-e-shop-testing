import homePage from "../pages/homePage"

describe("Home tests", () => {
  it("Open item page", () => {
    cy.openItemPage()
  })
  it("Get a list of shirts from search", () => {
    //tag: smoke
    cy.visit("/")
    homePage.searchProducts("shirt")
    cy.url().should("include", "shirt")
    homePage.elements.products().should("have.length.above", 0)
  })
})
