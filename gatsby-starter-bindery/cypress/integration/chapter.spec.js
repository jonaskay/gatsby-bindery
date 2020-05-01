describe("Chapter page", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.contains("The Cyclone").click()
  })

  it("Displays chapter page", () => {
    cy.url().should("contain", "/chapters/")
    cy.title({ timeout: 5000 }).should("contain", "The Cyclone")
  })

  it("Displays chapter content", () => {
    cy.get("h2").should("have.text", "1. The Cyclone")
    cy.get("p").should(
      "contain",
      "Dorothy lived in the midst of the great Kansas prairies"
    )
  })
})
