describe('User can see CV page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
      cy.get('#cv-tab').click();
    })
  
    // it('displays first project', () => {
    //   cy.get('#project-1').within(() => {
    //     cy.get(('.image')).should('exist');
    //     cy.get('.ui.header').should('contain', 'Library');
    //     cy.get('.description').should('contain', 'A virtual library living in Ruby,It has 32 books which you can checkout and return but never read.');
    //   })
    // });
  
    // it('displays third project', () => {
    //   cy.get('#project-3').within(() => {
    //     cy.get(('.image')).should('exist');
    //     cy.get('.ui.header').should('contain', 'FizzBuzz');
    //     cy.get('.description').should('contain', "First thing I've done in Ruby, so be nice.");
    //   })
    // });
  
    // it('displays fifth project', () => {
    //   cy.get('#project-5').within(() => {
    //     cy.get(('.image')).should('exist');
    //     cy.get('.ui.header').should('contain', 'Kermit Homepage');
    //     cy.get('.description').should('contain', "You can learn about Kermit and purchase merchandise (at least you can try to).");
    //   })
    // });  
  });