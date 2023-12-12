describe("Shop item tests", () => {
    it('Open item page', () => {
      cy.openItemPage()
    })
    it('Toggle next product image', () => {
      cy.openItemPage()
      cy.get('[aria-label="Next"]').first().click()
      cy.get('.fotorama__active').first().should('have.attr','href', 'https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/d34482110da20c5e24f97c38fb219fb3/w/s/ws12-orange_back_2.jpg')
    })
    it('Display reviews on reviews click', () => {
      cy.openItemPage()
      cy.get('.reviews-actions').find('a.view').click()
      cy.get('#reviews').should('be.visible')
    })
    it('Add a valid review', () => {
      cy.openItemPage()
      cy.get('.reviews-actions').find('a.add').click()
      cy.get('#Rating_5_label').click('right')
      cy.get('#nickname_field').type('doe')
      cy.get('#summary_field').type('great')
      cy.get('#review_field').type('it is great')
      cy.get('.submit').click()
      cy.get('[data-ui-id="message-success"]').should('be.visible')
    })
    it('Display warnings for empty review attempt', () => {
      cy.openItemPage()
      cy.get('.reviews-actions').find('a.add').click()
      cy.get('.submit').click()
      cy.get(`#${CSS.escape('ratings[4]-error')}`).should('be.visible')
      cy.get('#nickname_field-error').should('be.visible')
      cy.get('#summary_field-error').should('be.visible')
      cy.get('#review_field-error').should('be.visible')
    })
    it('Unable to add to cart item of quantity of 0', () => {
      cy.openItemPage()
      cy.get(".swatch-option.text").first().click()
      cy.get(".swatch-option.color").first().click()
      cy.get('#qty').clear().type('0')
      cy.get("#product-addtocart-button").click()
      cy.get('#qty-error').should('be.visible')
      cy.get('[data-ui-id="message-success"]').should('not.be.visible')
    })
  })
  