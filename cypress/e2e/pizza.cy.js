describe("Pizza siparis formu", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="start-order"]').click();
  });

  it("inputa metin girer", () => {
    cy.get('[data-cy="name-input"]').type("Alp");
    cy.get('[data-cy="name-input"]').should("have.value", "Alp");
  });

  it("birden fazla malzeme secer", () => {
    cy.contains("label", "Pepperoni").find('input[type="checkbox"]').check();
    cy.contains("label", "Sosis").find('input[type="checkbox"]').check();
    cy.contains("label", "Kanada Jambonu")
      .find('input[type="checkbox"]')
      .check();
    cy.contains("label", "Domates").find('input[type="checkbox"]').check();

    cy.get('[data-cy="toppings"] input:checked').should("have.length", 4);
  });

  it("formu gonderir", () => {
    cy.intercept("POST", "https://reqres.in/api/pizza", {
      statusCode: 201,
      body: {
        id: "777",
        createdAt: "2026-04-07T12:00:00.000Z",
      },
    }).as("pizzaPost");

    cy.get('[data-cy="name-input"]').type("Alperen");
    cy.get("#boyut-orta").check();
    cy.get("#hamur-sec").select("Ince");
    cy.contains("label", "Pepperoni").find('input[type="checkbox"]').check();
    cy.contains("label", "Sosis").find('input[type="checkbox"]').check();
    cy.contains("label", "Kanada Jambonu")
      .find('input[type="checkbox"]')
      .check();
    cy.contains("label", "Domates").find('input[type="checkbox"]').check();
    cy.get('[data-cy="note-input"]').type("Az pisirin");

    cy.get('[data-cy="submit-order"]').should("not.be.disabled").click();
    cy.wait("@pizzaPost");
    cy.get('[data-cy="confirmation-name"]').should("contain", "Alperen");
  });
});
