describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Displays introduction content", () => {
    cy.get("h1").should("contain", "The Wonderful Wizard of Oz")
    cy.get("p").should(
      "contain",
      "Folklore, legends, myths and fairy tales have followed childhood through the ages"
    )
  })

  it("Lists chapters", () => {
    const titles = [
      "The Cyclone",
      "The Council with the Munchkins",
      "How Dorothy Saved the Scarecrow",
    ]
    cy.get("ol > li").each(($li, index) => {
      cy.wrap($li).should("have.text", titles[index])
    })
  })
})
