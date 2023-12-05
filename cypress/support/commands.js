Cypress.Commands.add('login', (email, password) => {
    cy.visit('');
    cy.get('ul').find('li').contains('a', 'Sign In').click()
    cy.get('#email').click().type(email)
    cy.get('#pass').click().type(password)
    cy.get('#send2').click()
    cy.url().should('eq', Cypress.config().baseUrl)
    cy.contains('Welcome, John Doe!').should('be.visible')
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('AddFotoramaVideoEvents is not a function')) {
      return false
    }
  })
