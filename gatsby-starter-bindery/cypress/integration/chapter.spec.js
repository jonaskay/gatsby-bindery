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
    cy.get("h1").should("contain", "1. The Cyclone")
    cy.get("p").should(
      "contain",
      "Dorothy lived in the midst of the great Kansas prairies"
    )
  })

  it("Displays a link to index page", () => {
    cy.get("a").contains("Home").click()
    cy.get("h1").should("contain", "The Wonderful Wizard of Oz")
  })

  it("Displays links to next and previous chapters", () => {
    cy.get("a").contains("Next").click()
    cy.title({ timeout: 5000 }).should(
      "contain",
      "The Council with the Munchkins"
    )
    cy.get("h1").should("contain", "2. The Council with the Munchkins")

    cy.get("a").contains("Previous").click()
    cy.title({ timeout: 5000 }).should("contain", "The Cyclone")
    cy.get("h1").should("contain", "1. The Cyclone")
  })

  it("Displays links to all chapters", () => {
    cy.get("a").contains("The Cyclone").should("not.exist")
    cy.get("a").contains("The Council with the Munchkins").should("exist")
    cy.get("a").contains("How Dorothy Saved the Scarecrow").should("exist")
  })
})
