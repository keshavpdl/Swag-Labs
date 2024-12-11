class InventoryPage {
    verifyUrl() {
        cy.url().should('include', '/inventory.html');
    }

    // Method to filter items by Name (Descending)
    filterByNameDesc() {
        cy.get('.product_sort_container').select('Name (Z to A)');  // Selecting Name (Z to A) in the dropdown
    }

    // Method to filter items by Price (Low to High)
    filterByPriceLowToHigh() {
        cy.get('.product_sort_container').select('Price (low to high)');  // Selecting Price (Low to High) in the dropdown
    }

    verifyFilterApplied(option) {
        cy.get('.product_sort_container').should('have.value', option);
    }

    verifyDescendingItems() {
        // Capture the product names
        cy.get('.inventory_item_name').then((items) => {
            const actualOrder = [...items].map((item) => item.innerText); // Get displayed names
            const expectedOrder = [...actualOrder].sort((a, b) => b.localeCompare(a)); // Generate descending order

            // Assert that the displayed order matches the expected descending order
            expect(actualOrder).to.deep.equal(expectedOrder);
        });
    }

    verifyLowtoHigh() {
        // Capture the product prices
        cy.get('.inventory_item_price').then((items) => {
            const actualPrices = [...items].map((item) => parseFloat(item.innerText.replace('$', ''))); // Extract displayed prices as numbers
            const expectedPrices = [...actualPrices].sort((a, b) => a - b); // Generate ascending order of prices

            // Assert that the displayed prices are sorted in ascending order
            expect(actualPrices).to.deep.equal(expectedPrices);
        });
    }

    addToCart(productName) {
        cy.contains(productName).parent().find('button').click();
    }
}

export default InventoryPage;
