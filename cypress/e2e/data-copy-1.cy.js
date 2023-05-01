describe("Data", () => {
  it("displays data", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Hello, World!");
    cy.contains("Python Code Nemesis");
  });
});
