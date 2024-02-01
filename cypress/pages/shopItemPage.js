class ShopItemPage {
  elements = {
    rightArrow: () => cy.get('[aria-label="Next"]').first(),
    activeImage: () => cy.get(".fotorama__active").first(),
    reviewBtn: () => cy.get("#tab-label-reviews-title"),
    reviews: () => cy.get("#customer-reviews"),
    addReviewBtn: () => cy.get(".reviews-actions").find("a.add"),
    rating5: () => cy.get("#Rating_5_label"),
    nicknameField: () => cy.get("#nickname_field"),
    summaryField: () => cy.get("#summary_field"),
    reviewField: () => cy.get("#review_field"),
    submitBtn: () => cy.get(".submit"),
    successMsg: () => cy.get('[data-ui-id="message-success"]'),
    ratingsError: () => cy.get(`#${CSS.escape("ratings[4]-error")}`),
    nicknameError: () => cy.get("#nickname_field-error"),
    summaryError: () => cy.get("#summary_field-error"),
    reviewError: () => cy.get("#review_field-error"),
    sizeField: () => cy.get(".swatch-option.text").first(),
    colorField : () => cy.get(".swatch-option.color").first(),
    quantityField: () => cy.get("#qty"),
    quantityError: () => cy.get("#qty-error"),
    addToCartBtn: () => cy.get("#product-addtocart-button"),
    showCartBtn: () => cy.get(".showcart"),
    productTitle: () => cy.get('[data-ui-id="page-title-wrapper"]'),
    viewCartBtn: () => cy.get(".viewcart"),
    cartProductTitle: () => cy.get(".product-item-name")
  }

  clickRightArrow() {
    this.elements.rightArrow().click()
  }

  openReviews() {
    this.elements.reviewBtn().click()
  }

  clickAddReview() {
    this.elements.addReviewBtn().click()
  }

  clickRating5() {
    this.elements.rating5().click("right")
  }

  inputNickname(nickname) {
    this.elements.nicknameField().type(nickname)
  }

  inputSummary(summary) {
    this.elements.summaryField().type(summary)
  }

  inputReview(review) {
    this.elements.reviewField().type(review)
  }

  submitReview() {
    this.elements.submitBtn().click()
  }

  clickSize() {
    this.elements.sizeField().click()
  }

  clickColor () {
    this.elements.colorField().click()
  }

  inputQuantity(quantity) {
    this.elements.quantityField().clear().type(quantity)
  }

  addToCart() {
    this.elements.addToCartBtn().click()
  }

  showCart() {
    this.elements.showCartBtn().click()
  }

  viewCart() {
    this.elements.viewCartBtn().click()
  }
}

export default new ShopItemPage()
