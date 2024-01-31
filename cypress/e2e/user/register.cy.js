import registerPage from "../../pages/user/registerPage"
import { faker } from "@faker-js/faker"

describe("Register page tests", () => {
    beforeEach(() => {
        cy.visit('customer/account/create')
    })
    it('Shows register page title', () => {
        registerPage.elements.registerPageTitle().should('have.text', 'Create New Customer Account')
    })
    it('Register a new user', () => {
        // tag: smoke
        const password = faker.internet.password()
        registerPage.inputFirstName(faker.person.firstName())
        registerPage.inputLastName(faker.person.lastName())
        registerPage.inputEmail(faker.internet.email())
        registerPage.inputPassword(password)
        registerPage.inputPasswordConfirmation(password)
        registerPage.submitRegistration()
        cy.url().should('include', '/customer/account')
  })
    it('Display required errors for empty form submit', () => {
        registerPage.submitRegistration()
        registerPage.elements.firstNameInputError().should('have.text', 'This is a required field.')
        registerPage.elements.lastNameInputError().should('have.text', 'This is a required field.')
        registerPage.elements.emailInputError().should('have.text', 'This is a required field.')
        registerPage.elements.passwordInputError().should('have.text', 'This is a required field.')
        registerPage.elements.passwordConfirmationInputError().should('have.text', 'This is a required field.')
    })
    it('Display error for invalid email', () => {
        registerPage.inputEmail('a{enter}')
        registerPage.elements.emailInputError().should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).')
    })
    it('Display password validator message for length less than 8 symbols', () => {
        cy.awaitRequest()
        registerPage.inputPassword('a')
        registerPage.elements.passwordInputError().should('have.text', 'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Upper case)', () => {
        cy.awaitRequest()
        registerPage.inputPassword('Aaaaaaaa')
        registerPage.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Digits)', () => {
        cy.awaitRequest()
        registerPage.inputPassword('aaaaaaa1')
        registerPage.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Lower case and Special characters)', () => {
        cy.awaitRequest()
        registerPage.inputPassword('aaaaaaa*')
        registerPage.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Upper case and Digits)', () => {
        cy.awaitRequest()
        registerPage.inputPassword('AAAAAAA1')
        registerPage.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Upper case and Special characters)', () => {
        cy.awaitRequest()
        registerPage.inputPassword('AAAAAAA*')
        registerPage.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display password validator message for only 2 character classes (Digits and Special characters)', () => {
        cy.awaitRequest()
        registerPage.inputPassword('1111111*')
        registerPage.elements.passwordInputError().should('have.text', 'Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.')
    })
    it('Display error for incorrect password repeat', () => {
        registerPage.inputPassword('Aaaaaaa1')
        registerPage.inputPasswordConfirmation('a{enter}')
        registerPage.elements.passwordConfirmationInputError().should('have.text', 'Please enter the same value again.')
    })
    it('Password meter changes for strong password', () => {
        registerPage.inputPassword('Aaaaaaa123')
        registerPage.elements.passwordStrengthMeterLevel().should('not.eq', 'Weak')
    })
  })
  