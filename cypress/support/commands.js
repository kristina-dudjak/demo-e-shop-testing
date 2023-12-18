Cypress.Commands.add('login', () => {
    cy.visit('customer/account/login')
    cy.get('#email').type('johnny.doe@gmail.com')
    cy.get('#pass').type('Password1{enter}')
    cy.contains('Welcome, John Doe!').should('be.visible')
  })

  Cypress.Commands.add('openItemPage', () => {
    cy.visit('');
    cy.get("#search").click().type("shirt{enter}")
    cy.get("ol.product-items").find("li").first().find('.product-item-link').as('productLink')
    cy.get('@productLink').invoke('text').then((productName) => {
        cy.get('@productLink').invoke('attr', 'href').then((url) => {
            cy.get('@productLink').click()
            cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', productName.trim())
            cy.url().should('equal', url)

        })
    })
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
      return false
  })
