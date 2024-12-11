import InventoryPage from "../pages/inventoryPage";
import csv from 'neat-csv';

describe('Filter Products', () => {
    const inventoryPage = new InventoryPage();
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

    it('Filter by Name (Z to A)', () => {
        inventoryPage.filterByNameDesc();
        inventoryPage.verifyFilterApplied('za');
        inventoryPage.verifyDescendingItems();
    });

    it('Filter by Price (Low to High)', () => {
        inventoryPage.filterByPriceLowToHigh();
        inventoryPage.verifyFilterApplied('lohi');
        inventoryPage.verifyLowtoHigh();
    });
});
