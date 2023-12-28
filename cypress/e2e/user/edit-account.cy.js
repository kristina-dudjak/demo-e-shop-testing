import editAccount from "../../page-object-models/user/editAccount"

describe("Customer edit account page tests", () => {
    beforeEach(() => {
        cy.login()
        cy.url().then((currentUrl) => {
            cy.visit(currentUrl + 'edit')
          })
    })
    it('Shows edit account page title', () => {
        editAccount.elements.editAccountTitle().should('have.text', 'Edit Account Information')
    })
    it('Display required error for empty first name submit', () => {
        editAccount.inputFirstName('')
        editAccount.elements.firstNameError().should('have.text', 'This is a required field.')
    })
    it('Display required error for empty last name submit', () => {
        editAccount.inputLastName('')
        editAccount.elements.lastNameError().should('have.text', 'This is a required field.')
    })
    it('Change first name', () => {
        editAccount.inputFirstName('Johnny')
        editAccount.elements.submitSuccessMessage().should('include.text', 'You saved the account information.')
        editAccount.elements.welcomeMessage().should('include.text', 'Welcome, Johnny Doe!')
        editAccount.elements.userInformationText().should('include.text', 'johnny.doe@gmail.com', 'Johnny Doe')

    })
    it('Change last name', () => {
        editAccount.inputLastName('D')
        editAccount.elements.submitSuccessMessage().should('include.text', 'You saved the account information.')
        editAccount.elements.welcomeMessage().should('include.text', 'Welcome, Johnny D!')
        editAccount.elements.userInformationText().should('include.text', 'johnny.doe@gmail.com', 'Johnny D')
    })
    it('Change email checkbox displays email form', () => {
        editAccount.checkChangeEmail()
        editAccount.elements.changeEmailForm().should('be.visible')
        editAccount.elements.changeFormTitle().should('have.text', 'Change Email')
    })
    it('Change password checkbox displays password form', () => {
        editAccount.checkChangePassword()
        editAccount.elements.changePasswordForm().should('be.visible')
        editAccount.elements.changeFormTitle().should('have.text', 'Change Password')
    })
    it('Change email and password checkbox displays email and password form', () => {
        editAccount.checkChangeEmail()
        ditAccount.checkChangePassword()
        editAccount.elements.changeEmailForm().should('be.visible')
        editAccount.elements.changePasswordForm().should('be.visible')
        editAccount.elements.changeFormTitle().should('have.text', 'Change Email and Password')
    })    
  })
  