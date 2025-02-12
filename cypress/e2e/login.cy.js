describe("Login Form Running", () => {
  it("Check Login Form", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[cy-data-header="sign In"]')
      .should("exist")
      .should("have.text", "Sign In");
  });

  it("Invalid Email Inputs I", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[cy-data-email="email"]').should("exist");
    cy.get('[cy-data-email-error="email-error"]').should("exist");

    cy.get('[cy-data-email="email"]').type("dogancan");
    cy.get('[cy-data-email-error="email-error"]').should("exist");
    cy.get('[cy-data-email="email"]').clear();
  });

  it("Invalid Email Inputs II", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[cy-data-email="email"]').should("exist");
    cy.get('[cy-data-email-error="email-error"]').should("exist");

    cy.get('[cy-data-email="email"]').type("dogancan@workintech");
    cy.get('[cy-data-email-error="email-error"]').should("exist");
    cy.get('[cy-data-email="email"]').clear();
  });

  it("Invalid Email Inputs III", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[cy-data-email="email"]').should("exist");
    cy.get('[cy-data-email-error="email-error"]').should("exist");

    cy.get('[cy-data-email="email"]').type("dogancan@workintech.");
    cy.get('[cy-data-email-error="email-error"]').should("exist");
    cy.get('[cy-data-email="email"').clear();
  });

  it("Valid Email Input", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[cy-data-email="email"]').should("exist");
    cy.get('[cy-data-email-error="email-error"]').should("exist");

    cy.get('[cy-data-email="email"]').type("dogancan@workintech.com");
    cy.get('[cy-data-email-error="email-error"]').should("not.exist");
    //cy.get('[cy-data-email="email"').clear();
  });

  it("Valid Inputs", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[cy-data-email="email"]').should("exist");
    cy.get('[cy-data-password="password"]').should("exist");
    cy.get('[cy-data-terms="terms"]').should("exist");

    cy.get('[cy-data-email-error="email-error"]').should("exist");
    cy.get('[cy-data-password-error="password-error"]').should("exist");
    cy.get('[cy-data-button="sign-in"]').should("be.disabled");

    cy.get('[cy-data-email="email"]').type("dogancan@workintech.com");
    cy.get('[cy-data-password="password"]').type("1234");
    cy.get('[cy-data-terms="terms"]').check();

    cy.get('[cy-data-email-error="email-error"]').should("not.exist");
    cy.get('[cy-data-password-error="password-error"]').should("not.exist");
    cy.get('[cy-data-button="sign-in"]').not("be.disabled");

    cy.get('[cy-data-button="sign-in"]').click();
    cy.get('[cy-success-title="success-title"]').should("exist");
  });
});
