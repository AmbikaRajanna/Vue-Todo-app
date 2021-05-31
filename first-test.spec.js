/// <reference types="cypress" />

describe('Basic test', function(){
    it('COnnection test', function()
    {
        cy.visit('http://127.0.0.1:5500/hello_world/firstproj/todoapp.html'),
        cy.contains('Todo List').should('exist')
        
    })

    it('actual testing of app - testcase1', function()
    {
      cy.get('div.container')
            .find('[type="text"]').type('Hello')
      cy.get('div.container')
            .find('[type="submit"]').click()
            
    })
    it('actual testing of app - testcase2', function()
    {
      cy.get('div.container')
            .find('[type="text"]').type('world')
      cy.get('div.container')
            .find('[type="submit"]').click()
            
    })
    it('actual testing of app - testcase3', function()
    {
      //cy.contains('world')
      //cy.get('li').find('[type="li"]').focus()
      cy.get('button').contains('Edit').click()
      cy.get('div.container')
            .find('[type="text"]').type('Greeting')

      cy.get('div.container')
            .find('[type="submit"]').click()
    })
    it('actual testing of app - testcase4', function()
    {
      //cy.contains('world')
      //cy.get('li').find('[type="li"]').focus()
      cy.get('button').contains('Delete').click()
      // cy.get('div.container')
      //       .find('[type="text"]').type('Greeting')

      // cy.get('div.container')
      //       .find('[type="submit"]').click()
    })



})
