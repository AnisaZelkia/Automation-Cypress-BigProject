import * as assert from "@helper/asserts";
import * as element from '@helper/elements';
import * as route from '@helper/route';
import { ROUTES } from "@tests/const/routes";
import * as manager from '@tests/data/manager.data';
import * as managerPage from '@tests/page/manager.page';


describe('Flow manager Test', () => {
    beforeEach(() =>{
        route.visit(ROUTES.login);
    });
    it('Manager Data', () => {
        /*test case code in here
            element.fillfield(loginPage.usernameField, login.INVALID_LOGIN_DATA.username);
            element.fillfield(loginPage.passwordField, login.INVALID_LOGIN_DATA.password);
            element.click(loginPage.loginButton);
            assert.shouldContainText(loginPage.errorMessage,"Epic sadface: Username and password do not match any user in this service" );*/
          
                // select usernmae
            
                // at first, no option should be selected
                element.click(managerPage.managerbtn);
                    cy.get('.center')
                      .find('button')
                      .find('b')
                      // .should(cb) callback function will be retried
                      .should(($button) => {
                        expect($button).to.have.length(3)
              
                        const className = $button[1].className
              
                        expect(className).to.match(/notch ng-hide/)
                      })
                      // .then(cb) callback is not retried,
                      // it either passes or fails
                      assert.shouldContainText(managerPage.customerclass,'Add Customer');

                  })
                  


});