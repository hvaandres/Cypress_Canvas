context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://canvas.instructure.com/login/canvas')
    })
  
    it('Login - Teacher Account', () => {
      cy.get('#pseudonym_session_unique_id').type('mocktest@mailinator.com')
      cy.get('#pseudonym_session_password').type('Asdf1234')
      cy.get('.ic-Form-control > .Button').click()

    })
})