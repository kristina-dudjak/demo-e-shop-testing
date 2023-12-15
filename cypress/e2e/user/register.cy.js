describe("Register page tests", () => {
    beforeEach(() => {
        cy.visit('customer/account/create')
    })
    it('Shows register page title', () => {
        cy.get('[data-ui-id="page-title-wrapper"]').should('have.text', 'Create New Customer Account')
    })
    it('Display required errors for empty form submit', () => {
        cy.get('.submit').click()
        cy.get('#firstname-error').should('have.text', 'This is a required field.')
        cy.get('#lastname-error').should('have.text', 'This is a required field.')
        cy.get('#email_address-error').should('have.text', 'This is a required field.')
        cy.get('#password-error').should('have.text', 'This is a required field.')
        cy.get('#password-confirmation-error').should('have.text', 'This is a required field.')
    })
    it('Display error for invalid email', () => {
        cy.get('#email_address').type('a{enter}')
        cy.get('#email_address-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display password validator message for length less than 8 symbols', () => {
        cy.get('#password').type('a')
        cy.get('#password-error').should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Upper case)', () => {
        cy.get('#password').type('Aaaaaaaa')
        cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Digits)', () => {
        cy.get('#password').type('aaaaaaa1')
        cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Special characters)', () => {
        cy.get('#password').type('aaaaaaa*')
        cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Upper case and Digits)', () => {
        cy.get('#password').type('AAAAAAA1')
        cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Upper case and Special characters)', () => {
        cy.get('#password').type('AAAAAAA*')
        cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Digits and Special characters)', () => {
        cy.get('#password').type('1111111*')
        cy.get('#password-error').should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display error for incorrect password repeat', () => {
        cy.get('#password').type('Aaaaaaa1')
        cy.get('#password-confirmation').type('a{enter}')
        cy.get('#password-confirmation-error').should('have.text', 'Please enter the same value again.')
    })
    it('Password meter changes for strong password', () => {
        cy.get('#password').type('Aaaaaaa123')
        cy.get('#password-strength-meter-label').should('not.eq', 'Weak')
    })
  })
  