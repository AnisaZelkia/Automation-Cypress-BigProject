import * as assert from "@helper/asserts";
import * as element from '@helper/elements';
import * as route from '@helper/route';
import { ROUTES } from "@tests/const/routes";
import * as login from '@tests/data/login.data';
import * as loginPage from '@tests/page/login.page';
import { depositbtn } from "../page/login.page";


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
           // cy.get(loginPage.userSelect).select('1');
            // confirm the apples were selected
            // note that each value starts with "fr-" in our HTML
            /*cy.get(loginPage.userSelect).select('2');
            cy.get(loginPage.userSelect).select('3');
            cy.get(loginPage.userSelect).select('4');
            cy.get(loginPage.userSelect).select('5');*/

            /*cy.get(loginPage.userSelect).select(1).should('have.value', '1');
            cy.get(loginPage.userSelect).select(2).should('have.value', '2');
            cy.get(loginPage.userSelect).select(3).should('have.value', '3');
            cy.get(loginPage.userSelect).select(4).should('have.value', '4');
            cy.get(loginPage.userSelect).select(5).should('have.value', '5');
            */

           cy.get(loginPage.userSelect)
            .select('1', { force: true })
            .invoke('val')
            .should('eq', '1')

            cy.get(loginPage.userSelect)
            .select('2', { force: true })
            .invoke('val')
            .should('eq', '2')

            cy.get(loginPage.userSelect)
            .select('3', { force: true })
            .invoke('val')
            .should('eq', '3')

            cy.get(loginPage.userSelect)
            .select('4', { force: true })
            .invoke('val')
            .should('eq', '4')

            cy.get(loginPage.userSelect)
            .select('5', { force: true })
            .invoke('val')
            .should('eq', '5')
            element.click(loginPage.loginbtn);


            cy.url().should('include', '/account')
         
            assert.shouldContainText(loginPage.selected,'1013');

            cy.get(loginPage.accountSelect).select('number:1013');
            cy.get(loginPage.accountSelect).select('number:1014');
            cy.get(loginPage.accountSelect).select('number:1015');
            element.click(loginPage.transactionbtn);
            cy.get(loginPage.tabel)
            .find('thead')
            .find('td')
            .find('a')
            .first()
            // checking the text of the <td> element in various ways
            .should('have.text', '\n            Date-Time\n          ')

            element.click(loginPage.backbtn);

            element.click(loginPage.depositbtn);
            element.fillfield(loginPage.amountField, login.AMOUNT.amount);
            element.click(loginPage.loginbtn);
            cy.get(loginPage.successMessage).should('have.text',"Deposit Successful");
  
           
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