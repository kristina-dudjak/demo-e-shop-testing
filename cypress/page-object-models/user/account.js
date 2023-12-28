class Account {

    elements = {
        accountTitle : () => cy.get('[data-ui-id="page-title-wrapper"]'),
        userInformation : () => cy.get('.box-content'),
        editAccountRedirect : () => cy.get('.edit'),
        changePasswordRedirect : () => cy.get('.change-password'),
        customerAddressRedirect : () => cy.get('.edit span').contains('Manage Addresses').parent('.edit'),
        customerAddressEditRedirect : () => cy.get('[data-ui-id="default-billing-edit-link"]')
    }
}

export default new Account()