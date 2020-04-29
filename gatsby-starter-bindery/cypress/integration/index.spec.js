describe("Index page", () => {
  beforeEach(() => {
    cy.visit("/")
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
