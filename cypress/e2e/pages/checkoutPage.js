class CheckoutPage {
    clickCheckout() {
        cy.get('.btn_action.checkout_button').click();
    }

    fillCheckoutDetails(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
    }

    completeCheckout() {
        cy.get('#continue').click();
        cy.get('#finish').click();
    }

    clickContinue() {
        cy.contains('input', 'CONTINUE').click();

    }
    clickFinish(){
        cy.get('.btn_action.cart_button').click();
    }
    verifyOrderConfirmation() {
        // Assert that the checkout complete container is visible
cy.get('#checkout_complete_container').should('be.visible');

// Assert that the "THANK YOU FOR YOUR ORDER" text is present
cy.get('.complete-header').should('contain.text', 'THANK YOU FOR YOUR ORDER');

// Assert that the "Your order has been dispatched..." text is present
cy.get('.complete-text').should('contain.text', 'Your order has been dispatched');

// Optionally, check if the image is present
cy.get('.pony_express').should('be.visible');

// Optionally, check if the image source is correct (if needed)
cy.get('.pony_express').should('have.attr', 'src', 'img/pony-express.png');
    }


}

export default CheckoutPage;
