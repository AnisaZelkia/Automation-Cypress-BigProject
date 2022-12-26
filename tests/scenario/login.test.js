import * as assert from "@helper/asserts";
import * as element from '@helper/elements';
import * as route from '@helper/route';
import { ROUTES } from "@tests/const/routes";
import * as login from '@tests/data/login.data';
import * as loginPage from '@tests/page/login.page';


describe('Customer Login Test', () => {
    beforeEach(() =>{
        route.visit(ROUTES.login);
    });



    it('Ensure the error message is displayed when user entered valid login data', () => {
    /*test case code in here
        element.fillfield(loginPage.usernameField, login.INVALID_LOGIN_DATA.username);
        element.fillfield(loginPage.passwordField, login.INVALID_LOGIN_DATA.password);
        element.click(loginPage.loginButton);
        assert.shouldContainText(loginPage.errorMessage,"Epic sadface: Username and password do not match any user in this service" );*/
      
            // select usernmae
        
            // at first, no option should be selected
            element.click(loginPage.customerbtn);
            cy.get(loginPage.userSelect)
            assert.shouldContainText(loginPage.userSelect,"---Your Name---");
        
            // Select option(s) with matching text content
            cy.get(loginPage.userSelect).select('1');
            // confirm the apples were selected
            // note that each value starts with "fr-" in our HTML
            cy.get(loginPage.userSelect).select('2');
            cy.get(loginPage.userSelect).select('3');
            cy.get(loginPage.userSelect).select('4');
            cy.get(loginPage.userSelect).select('5');
            element.click(loginPage.loginbtn);
            assert.shouldContainText(loginPage.selected,'1013');

            cy.get(loginPage.accountSelect).select('number:1013');
            cy.get(loginPage.accountSelect).select('number:1014');
            cy.get(loginPage.accountSelect).select('number:1015');
    });
    /*
    it('Ensure the user able to redirect in homepage when user entered valid login data', () => {
        //test case code in here
            element.fillfield(loginPage.usernameField, login.VALID_LOGIN_DATA.username);
            element.fillfield(loginPage.passwordField, login.VALID_LOGIN_DATA.password);
            element.click(loginPage.loginButton);
            assert.shouldContainText(loginPage.productTitle,"Sauce Labs Backpack");
        
        }); */
});