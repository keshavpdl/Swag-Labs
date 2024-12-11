import CartPage from "../pages/cartPage";
import csv from 'neat-csv';
import CheckoutPage from "../pages/checkoutPage";

describe('Add to Cart', () => {
    const cartPage = new CartPage();
    const checkoutPage = new CheckoutPage();
    let loginData = [];

    before(() => {
        // Load CSV data
        cy.fixture('credentials.csv')
            .then(csv)
            .then((data) => {
                loginData = data;  // Populate loginData with CSV data
            });
    });

    beforeEach(() => {
        // Ensure loginData is available before each test
        cy.wrap(loginData).should('exist');  // Ensure the data is loaded
        const { username, password } = loginData[0];  // Using 'standard_user' by default
        cy.login(username, password);  // Call the login command
    });

    it('Add products to cart', () => {
        // Add products to the cart
        cartPage.addToCart('Sauce Labs Onesie');
        cartPage.verifyCartItemCount();

        cartPage.gotoCartPage();
        
        // Verify that the products have been added to the cart
        cartPage.verifyProductInCart('Sauce Labs Onesie');

        checkoutPage.clickCheckout();
        checkoutPage.fillCheckoutDetails('abcd', 'xyz','44600');
        checkoutPage.clickContinue();
        checkoutPage.clickFinish();
        checkoutPage.verifyOrderConfirmation()
    });
});
