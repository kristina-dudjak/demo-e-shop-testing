class EditAccount {
    elements = {
        editAccountTitle : () => cy.get('[data-ui-id="page-title-wrapper"]'),
        firstNameInput : () => cy.get('#firstname'),
        lastNameInput : () => cy.get('#lastname'),
        firstNameError : () => cy.get('#firstname-error'),
        lastNameError : () => cy.get('#lastname-error'),
        submitSuccessMessage : () => cy.get('[data-ui-id="message-success"]'),
        welcomeMessage : () => cy.get('.logged-in'),
        userInformationText : () => cy.get('.box-content'),
        changeEmailCheckbox : () => cy.get('#change-email'),
        changePasswordCheckbox : () => cy.get('#change-password'),
        changeEmailForm : () => cy.get('[data-container="change-email"]'),
        changeFormTitle : () => cy.get('[data-title="change-email-password"]'),
        changePasswordForm : () => cy.get('[data-container="change-password"]'),
    }

    inputFirstName (firstName) {
        this.elements.firstNameInput().clear().type(`${firstName}{enter}`)
    }

    inputLastName (lastName) {
        this.elements.lastNameInput().clear().type(`${lastName}{enter}`)
    }

    checkChangeEmail () {
        this.elements.changeEmailCheckbox().check()
    }

    checkChangePassword () {
        this.elements.changePasswordCheckbox().check()
    }
    
}

export default new EditAccount()