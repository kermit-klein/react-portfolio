describe('Portfolio interface', () => {
    it('successfully renders',() => {
      cy.visit('http://localhost:3000')
      cy.get('#header').should('contain', 'My Portfolio')
      cy.get('#footer').should('contain', 'Made with React 16.13.1')
      cy.get('.github').should('contain', 'Github')
      cy.get('.discogs').should('contain', 'Discogs')
      cy.get('.linkedin').should('contain', 'LinkedIn')
    })
  })