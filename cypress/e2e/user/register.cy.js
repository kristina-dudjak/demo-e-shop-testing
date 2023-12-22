import registerForm from "../../page-object-models/user/registerForm"

describe("Register page tests", () => {
    beforeEach(() => {
        cy.visit('customer/account/create')
    })
    it('Shows register page title', () => {
        registerForm.elements.registerPageTitle().should('have.text', 'Create New Customer Account')
    })
    it('Display required errors for empty form submit', () => {
        registerForm.submitRegistration()
        registerForm.elements.firstNameInputError().should('have.text', 'This is a required field.')
        registerForm.elements.lastNameInputError().should('have.text', 'This is a required field.')
        registerForm.elements.emailInputError().should('have.text', 'This is a required field.')
        registerForm.elements.passwordInputError().should('have.text', 'This is a required field.')
        registerForm.elements.passwordConfirmationInputError().should('have.text', 'This is a required field.')
    })
    it('Display error for invalid email', () => {
        registerForm.inputEmail('a{enter}')
        registerForm.elements.emailInputError().should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display password validator message for length less than 8 symbols', () => {
        registerForm.inputPassword('a')
        registerForm.elements.passwordInputError().should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Upper case)', () => {
        registerForm.inputPassword('Aaaaaaaa')
        registerForm.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Digits)', () => {
        registerForm.inputPassword('aaaaaaa1')
        registerForm.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Special characters)', () => {
        registerForm.inputPassword('aaaaaaa*')
        registerForm.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Upper case and Digits)', () => {
        registerForm.inputPassword('AAAAAAA1')
        registerForm.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Upper case and Special characters)', () => {
        registerForm.inputPassword('AAAAAAA*')
        registerForm.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Digits and Special characters)', () => {
        registerForm.inputPassword('1111111*')
        registerForm.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display error for incorrect password repeat', () => {
        registerForm.inputPassword('Aaaaaaa1')
        registerForm.inputPasswordConfirmation('a{enter}')
        registerForm.elements.passwordConfirmationInputError().should('have.text', 'Please enter the same value again.')
    })
    it('Password meter changes for strong password', () => {
        registerForm.inputPassword('Aaaaaaa123')
        registerForm.elements.passwordStrengthMeterLevel().should('not.eq', 'Weak')
    })
  })
  