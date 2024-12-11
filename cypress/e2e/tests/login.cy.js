import LoginPage from '../pages/loginPage';
import csv from 'neat-csv';

describe('Login Tests', () => {
    const loginPage = new LoginPage();
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
        // Make sure loginData is available before each test
        cy.wrap(loginData).should('exist');  // Ensure the data is loaded
        loginPage.visit();
    });

    it('Login with an standard_user', () => {
        const { username, password } = loginData[0];  
        loginPage.fillOutLoginForm(username, password);
        loginPage.login();
        loginPage.verifyLoginSuccess();
    });

    it('Login with locked_out_user', () => {
        const { username, password } = loginData[1];  
        loginPage.fillOutLoginForm(username, password);
        loginPage.login();
        loginPage.verifyLockedoutError();
    });

    it('Login with problem_user', () => {
        const { username, password } = loginData[2];  
        loginPage.fillOutLoginForm(username, password);
        loginPage.login();
        loginPage.verifyProblemUser();
    });

    it.skip('Login with performance_glitch_user', () => {
        const { username, password } = loginData[3];  
        loginPage.fillOutLoginForm(username, password);
        loginPage.login();
        loginPage.verifyErrorMessage();
    });

    it('Login with error_user', () => {
        const { username, password } = loginData[4];  
        loginPage.fillOutLoginForm(username, password);
        loginPage.login();
        loginPage.verifyErrorMessage();
    });

    it('Login with visual_user', () => {
        const { username, password } = loginData[5];  
        loginPage.fillOutLoginForm(username, password);
        loginPage.login();
        loginPage.verifyErrorMessage();
    });

});
