import CartPage from "../pages/cartPage";
import csv from 'neat-csv';

describe('Add to Cart', () => {
    const cartPage = new CartPage();
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
        cartPage.addToCart('Sauce Labs Backpack');
        cartPage.addToCart('Sauce Labs Bike Light');
        cartPage.verifyCartItemCount();

        cartPage.gotoCartPage();
        
        // Verify that the products have been added to the cart
        cartPage.verifyProductInCart('Sauce Labs Onesie');
        cartPage.verifyProductInCart('Sauce Labs Backpack');
        cartPage.verifyProductInCart('Sauce Labs Bike Light');
    });
});
