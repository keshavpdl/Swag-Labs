class LoginPage {
    visit() {
        cy.visit('/index.html');
    }

    fillOutLoginForm(username, password) {
        cy.get('[data-test="username"]').type(username);
        cy.get('[data-test="password"]').type(password);
    }

    login() {
        cy.get('#login-button').click();
    }

    verifyErrorMessage() {
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Username and password do not match any user in this service' );
    }
    verifyLockedoutError(){
        cy.get('[data-test="error"]').should('contain.text','Epic sadface: Sorry, this user has been locked out.' );
    }

    verifyProblemUser(){
    // Get all images in the inventory list
    cy.get('.inventory_item_img img').each(($img) => {
        // Check if the image source includes 'WithGarbageOnItToBreakTheUrl'
        cy.wrap($img)
          .should('have.attr', 'src')  // Check the 'src' attribute
          .and('include', 'WithGarbageOnItToBreakTheUrl');  // Check that the 'src' includes the invalid part
      });
    }
    verifyLoginSuccess() {
        cy.url().should('include', '/inventory.html');
        cy.get('.inventory_list').should('be.visible');
    }
}

export default LoginPage;
