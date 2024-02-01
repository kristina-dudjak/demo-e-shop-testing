class HomePage {
  elements = {
    searchField: () => cy.get("#search"),
    products: () => cy.get("ol.product-items"),
    firstProduct: () => this.elements.products().find("li").first(),
    firstProductLink: () =>
      this.elements.firstProduct().find(".product-item-link"),
    productTitle: () => cy.get('[data-ui-id="page-title-wrapper"]'),
  }

  searchProducts(query) {
    this.elements.searchField().type(`${query}{enter}`)
  }

  correctProductLinkAndPage() {
    this.elements.firstProductLink().then((productLink) => {
      const productName = productLink.text().trim()
      const url = productLink.attr("href")
      cy.wrap(productLink).click()
      this.elements.productTitle().should("have.text", productName)
      cy.url().should("equal", url)
    })
  }
}

export default new HomePage()
