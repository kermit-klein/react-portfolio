describe('User can navigate the app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    describe('to About tab and it', () => {
      beforeEach(() => {
        cy.get('#about-tab').click()
      })
  
      it('displays About Me header', () => {
        cy.get('#about-header').should('contain', 'About Me')
      })
  
      it('displays component name in url', () => {
        cy.url().should("contain", "about")
      })
  
      it('does not display My Projects header ', () => {
        cy.get('#projects-header').should('not.exist')
      })
  
      it('does not display Hello world', () => {
        cy.get('#hello').should('not.exist')
      })
    })
  
    describe('to My Projects tab and it',() => {
      beforeEach(() => {
        cy.get('#projects-tab').click()
      })
  
      it('displays My Projects header', () => {
        cy.get('#projects-header').should('contain', 'My Projects')
      })
  
      it('displays component name in url', () => {
        cy.url().should("contain", "projects")
      })
  
      it('does not display About Me header ', () => {
        cy.get('#about-header').should('not.exist')
      })
  
      it('does not display Hello world', () => {
        cy.get('#hello').should('not.exist')
      })
    })
  
    describe('back to My Portfolio/Hello tab and it',() => {
      beforeEach(() => {
        cy.get('#about-tab').click()
        cy.get('#header').click()
      })
  
      it('displays Github button and visit site', () => {
        cy.get('.github').should('contain', 'Github')
        cy.get('#github').click()
      })

      it('displays Discogs button and visit site', () => {
        cy.get('.discogs').should('contain', 'Discogs')
        cy.get('#discogs').click()
      })

      it('displays Linkedin button and visit site', () => {
        cy.get('.linkedin').should('contain', 'LinkedIn')
        cy.get('#linkedin').click()
      })
  
      it('displays correct url', () => {
        cy.url()
          .should("not.contain", "projects")
          .and("not.contain", "about")    
      })
  
      it('does not display About Me header ', () => {
        cy.get('#about-header').should('not.exist')
      })
  
      it('does not display My Projects header', () => {
        cy.get('#projects-header').should('not.exist')
      })
    })

    describe("to CV and it", ()=> {
      beforeEach(() => {
        cy.get('#cv-tab').click()
      })

      it('displays component name in url', () => {
        cy.url().should("contain", "cv")
      })

      it('displays correct url', () => {
        cy.url()
          .should("not.contain", "projects")
          .and("not.contain", "about")
          .and("not.contain","contact")    
      })

      it('displays Contact page link and clicks it', () => {
        cy.get('#contactPage').should('contain', 'Contact me')
        cy.get('#contactPage').click()
      })

      it('displays CV headers', () => {
        cy.get('.workhead').should('contain', 'Work Experience')
        cy.get('.eduhead').should('contain', 'Education')
      })

      it('does not display My Projects header ', () => {
        cy.get('#projects-header').should('not.exist')
      })
  
      it('does not display Hello world', () => {
        cy.get('#hello').should('not.exist')
      })

    })

    describe("to Contacts page and it", ()=> {
      beforeEach(() => {
        cy.get('#cv-tab').click()
        cy.get("#contactPage").click()
      })

      it('displays component name in url', () => {
        cy.url().should("contain", "contact")
      })

      it('displays correct url', () => {
        cy.url()
          .should("not.contain", "projects")
          .and("not.contain", "about")
          .and("not.contain","cv")    
      })

      it('displays Form', () => {
        cy.get('.contact-container').should('contain', 'Message')
      })

    })
  })