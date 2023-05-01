describe("Data API", () => {
  it("returns data", () => {
    cy.request("http://localhost:5000/data").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", "Hello, World!");
    });
  });
});
