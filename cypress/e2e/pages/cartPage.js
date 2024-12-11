class CartPage {

    verifyProductInCart(productName) {
        cy.contains('.cart_item', productName).should('exist');
    }

    addToCart(productName) {
        cy.contains('.inventory_item_name', productName)
            .parents('.inventory_item')  // Navigate to the parent element
            .find('button')              // Find the button inside the product element
            .click();                    // Click the "Add to Cart" button
    }
    verifyCartItemCount() {
        cy.get('.shopping_cart_badge')
            .invoke('text')  // Get the text content of the cart item badge
            .then((text) => {
                const itemCount = parseInt(text, 10);  // Convert the text to an integer
                expect(itemCount).to.be.at.least(1);  // Assert that the item count is greater than or equal to 1
            });
    }
    
    gotoCartPage() {
        cy.visit('/cart.html')
    }
}

export default CartPage;
