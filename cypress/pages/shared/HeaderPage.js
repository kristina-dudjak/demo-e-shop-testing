class HeaderPage {
  elements = {
    menu: () => cy.get('[data-action="customer-menu-toggle"]').first(),
    signOutBtn: () => cy.get(".authorization-link").first(),
  }

  openMenu() {
    this.elements.menu().click()
  }

  clickSignOut() {
    this.elements.signOutBtn().click()
  }
}

export default new HeaderPage()
