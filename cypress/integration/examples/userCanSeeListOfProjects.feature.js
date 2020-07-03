describe("User can see list of projects", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#projects-tab").click();
  });

  it("displays first project and visit link", () => {
    cy.get("#project-1").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "YelpRecord");
      cy.get(".description").should(
        "contain",
        "An app where you can create posts about your local record shops,rate them, comment on them. NodeJS/Express/MongoDB"
      );
      cy.get(".ui.header").click();
    });
  });

  it("displays third project and visit link", () => {
    cy.get("#project-3").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Daily News Sense Client");
      cy.get(".description").should(
        "contain",
        "Client Side of a news web app. Geolocation, UI language selection, Stripe payment features are used in this project. Rails/React/PostgreSQL"
      );
      cy.get(".ui.header").click();
    });
  });

  it("displays fifth project and visit link", () => {
    cy.get("#project-5").within(() => {
      cy.get(".image").should("exist");
      cy.get(".ui.header").should("contain", "Cooper Test");
      cy.get(".description").should(
        "contain",
        "A cooper test tracker for your own performance working with Rails API backend, Chart.js is used for drawing up nice performance graphs. Rails/React/PostgreSQL"
      );
      cy.get(".ui.header").click();
    });
  });
});
