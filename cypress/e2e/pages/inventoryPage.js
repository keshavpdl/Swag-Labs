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

    addToCart(productName) {
        cy.contains(productName).parent().find('button').click();
    }
}

export default InventoryPage;
