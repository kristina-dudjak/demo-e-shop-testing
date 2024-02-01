import shopItemPage from "../pages/shopItemPage"

describe("Shop item tests", () => {
  beforeEach(() => {
    cy.visit("radiant-tee.html")
  })
  it("Toggle next product image", () => {
    shopItemPage.clickRightArrow()
    shopItemPage.elements
      .activeImage()
      .should(
        "have.attr",
        "href",
        "https://magento.softwaretestingboard.com/pub/media/catalog/product/cache/d34482110da20c5e24f97c38fb219fb3/w/s/ws12-orange_back_2.jpg"
      )
  })
  it("Display reviews on reviews click", () => {
    shopItemPage.openReviews()
    shopItemPage.elements.reviews().should("be.visible")
  })
  it("Add a valid review", () => {
    cy.awaitRequest()
    shopItemPage.clickAddReview()
    shopItemPage.clickRating5()
    shopItemPage.inputNickname("johnny doe")
    shopItemPage.inputSummary("this is a summary.")
    shopItemPage.inputReview("this is my review.")
    shopItemPage.submitReview()
    shopItemPage.elements.successMsg().should("be.visible")
  })
  it("Display warnings for empty review attempt", () => {
    cy.awaitRequest()
    shopItemPage.clickAddReview()
    shopItemPage.submitReview()
    shopItemPage.elements.ratingsError().should("be.visible")
    shopItemPage.elements.nicknameError().should("be.visible")
    shopItemPage.elements.summaryError().should("be.visible")
    shopItemPage.elements.reviewError().should("be.visible")
  })
  it("Unable to add to cart item of quantity of 0", () => {
    shopItemPage.clickSize()
    shopItemPage.clickColor()
    shopItemPage.inputQuantity("0")
    shopItemPage.addToCart()
    shopItemPage.elements.quantityError().should("be.visible")
    shopItemPage.elements.successMsg().should("not.exist")
  })
  it("Unable to add to cart item of quantity greater than 10000", () => {
    shopItemPage.clickSize()
    shopItemPage.clickColor()
    shopItemPage.inputQuantity("10001")
    shopItemPage.addToCart()
    shopItemPage.elements.quantityError().should("be.visible")
    shopItemPage.elements.successMsg().should("not.exist")
  })
  it("Add item to cart", () => {
    //tag: smoke
    shopItemPage.clickSize()
    shopItemPage.clickColor()
    shopItemPage.addToCart()
    shopItemPage.elements.successMsg()
    shopItemPage.showCart()
    shopItemPage.elements
      .productTitle()
      .invoke("text")
      .then((title) => {
        shopItemPage.viewCart()
        shopItemPage.elements
          .cartProductTitle()
          .contains(title)
          .should("be.visible")
      })
  })
})
