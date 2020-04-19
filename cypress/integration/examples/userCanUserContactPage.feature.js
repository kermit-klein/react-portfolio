describe('Visit Contact form and it', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.get('#cv-tab').click()
        cy.get("#contactPage").click()
      })

     it("Can fill form", () => {
         cy.get("#name").type("Ali")
         cy.get("#email").type("ali@gmail.com")
         cy.get("#message").type("this is a message")
     })

     it("Can submit form", () => {
        cy.get("#name").type("Ali")
        cy.get("#email").type("ali@gmail.com")
        cy.get("#message").type("this is a message")
        cy.get('#submit').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Success!`)
          }) 

     })
  })