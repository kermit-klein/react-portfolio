describe('User can see CV page', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      cy.get('#cv-tab').click()
    })
  
    it('displays work experience 1', () => {
      cy.get('#work-1').within(() => {
        cy.get('.header').should('contain', 'CRM Specialist')
        cy.get('.description').should('contain', 'Monthly planning of retention')
      })
    })
  
    it('displays work experience 2', () => {
      cy.get('#work-2').within(() => {
        cy.get('.header').should('contain', 'Marketing Coordinator')
        cy.get('.company').should('contain', "Betsson Group AB")
      })
    })
  
    it('displays work experience 3', () => {
      cy.get('#work-3').within(() => {
        cy.get('.header').should('contain', 'Customer Representative')
        cy.get('.description').should('contain', "Resolving product or service problems")
      })
    }) 
    
    it('displays education 1', () => {
        cy.get('#edu-4').within(() => {
          cy.get('.header').should('contain', 'Junior Web-Developer')
          cy.get('.description').should('contain', "Full-stack web developing")
        })
      })  

    it('displays education 2', () => {
        cy.get('#edu-5').within(() => {
          cy.get('.header').should('contain', 'Master of Science, Electric Power Engineering')
          cy.get('.description').should('contain', "power systems")
        })
    })  

    it('displays education 3', () => {
        cy.get('#edu-7').within(() => {
          cy.get('.header').should('contain', 'Bachelor of Science, Electrical Engineering')
          cy.get('.description').should('contain', "electrical machines")
        })
    })  

    it("Images on CV page disappears when width is less than 1600px",() => {
        cy.viewport(1599,1080)
        cy.get("#cvwork").should("not.be.visible")
        cy.get("#cvhat").should("not.be.visible")
    })
  })