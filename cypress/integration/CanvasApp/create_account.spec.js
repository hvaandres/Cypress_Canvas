context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://canvas.instructure.com/login/canvas')
    })
  
    it('Create an Account - Teacher Account', () => {
      cy.get('.ic-Login__banner-title').click()
      // Create a teacher account
      cy.get('#signup_teacher').click()
      // Fill-Out the form
      cy.get('#edit-first-name--2').type('MockData')
      cy.get('#edit-last-name--2').type('Test')
      cy.get('#edit-account-type--2').select('Teacher')
      cy.get('#edit-email--2', {timeout: 100000}).type('mocktest@mailinator.com')
      cy.get('#edit-phone--2').type('0000000000')
      cy.get('#edit-job-title--2').type('Software Engineer')
      cy.get('#edit-school-organization--2').type('Test School')
      cy.get('#edit-organization-type--2').select('RTO/Training')
      cy.get('#edit-country--2').select('United States')
      cy.get('#edit-why-canvas---2').select('Other')
      cy.get('#edit-password--2').type('Asdf1234')
      cy.get('#edit-consent--2').click()
      cy.get('#edit-submit--2').click()

    })
})