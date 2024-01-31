import editAccountPage from "../../pages/user/editAccountPage"
import { faker } from "@faker-js/faker"

describe("Customer edit account page tests", () => {
  beforeEach(() => {
    cy.login()
    cy.visit("customer/account/edit")
  })
  it('Shows edit account page title', () => {
      editAccountPage.elements.editAccountTitle().should('have.text', 'Edit Account Information')
  })
  it('Display required error for empty first name submit', () => {
      editAccountPage.inputFirstName('')
      editAccountPage.elements.firstNameError().should('have.text', 'This is a required field.')
  })
  it('Display required error for empty last name submit', () => {
      editAccountPage.inputLastName('')
      editAccountPage.elements.lastNameError().should('have.text', 'This is a required field.')
  })
  it("Change first name", () => {
    const name = faker.person.firstName()
    cy.awaitUiRequest()
    editAccountPage.inputFirstName(name)
    editAccountPage.elements
      .submitSuccessMessage()
      .should("include.text", "You saved the account information.")
    editAccountPage.elements.welcomeMessage().should("include.text", name)
    editAccountPage.elements.userInformationText().should("include.text", name)
  })
  it("Change last name", () => {
    const lastName = faker.person.lastName()
    cy.awaitUiRequest()
    editAccountPage.inputLastName(lastName)
    editAccountPage.elements
      .submitSuccessMessage()
      .should("include.text", "You saved the account information.")
    editAccountPage.elements.welcomeMessage().should("include.text", lastName)
    editAccountPage.elements
      .userInformationText()
      .should("include.text", lastName)
  })
  it('Change email checkbox displays email form', () => {
      editAccountPage.checkChangeEmail()
      editAccountPage.elements.changeFormTitle().should('have.text', 'Change Email')
  })
  it('Change password checkbox displays password form', () => {
      editAccountPage.checkChangePassword()
      editAccountPage.elements.changeFormTitle().should('have.text', 'Change Password')
  })
  it('Change email and password checkbox displays email and password form', () => {
      editAccountPage.checkChangeEmail()
      editAccountPage.checkChangePassword()
      editAccountPage.elements.changeFormTitle().should('have.text', 'Change Email and Password')
  })
})
