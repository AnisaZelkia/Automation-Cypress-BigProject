import * as assert from "@helper/asserts";
import * as element from '@helper/elements';
import * as route from '@helper/route';
import { ROUTES } from "@tests/const/routes";
import * as manager from '@tests/data/manager.data';
import * as managerPage from '@tests/page/manager.page';


describe('Feature : Add Customer', () => {
    beforeEach(() =>{
        route.visit(ROUTES.login);
    });
    it('Scenario 1: To ensure manager can add new customer', () => {
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

                      route.visit(ROUTES.addCust);
                      element.click(managerPage.addbtn);
                      element.fillfield(managerPage.fnameField, manager.customer.firstname);
                      element.fillfield(managerPage.lnameField, manager.customer.lastname);
                      element.fillfield(managerPage.postField, manager.customer.pos);
                      // click submit
                      cy.get(managerPage.submitbtn).click();
                      // fire event with method on
                      cy.on(managerPage.alert,(t)=>{
                         //assertions
                         expect(t).to.contains("Customer added successfully with customer id :"+id);
                      })
                    
         
                  })
                  it('Scenario 2: To ensure manager cant add new customer, if first name field is empty', () => {
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
            
                                  route.visit(ROUTES.addCust);
                                  element.click(managerPage.addbtn);
                                  cy.get(managerPage.fnameField).invoke('val').should('to.be.empty');
                                     cy.get(managerPage.submitbtn).click();
                              
                                  cy.on(managerPage.alert,(t)=>{
                                     //assertions
                                     expect(t).to.contains("Please fill out this field.");
                                  })
                                
                     
                              })

                              it('Scenario 3: To ensure manager cant add new customer, if let last name field is empty', () => {
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
                        
                                              route.visit(ROUTES.addCust);
                                              element.click(managerPage.addbtn);
                                              element.fillfield(managerPage.fnameField, manager.customer.firstname);
                                              cy.get(managerPage.lnameField).invoke('val').should('to.be.empty');
                                                 cy.get(managerPage.submitbtn).click();
                                          
                                              cy.on(managerPage.alert,(t)=>{
                                                 //assertions
                                                 expect(t).to.contains("Please fill out this field.");
                                              })
                                            
                                 
                                          })

                                          it('Scenario 4: To ensure manager cant add new customer, if let post code field is empty', () => {
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
                                    
                                                          route.visit(ROUTES.addCust);
                                                          element.click(managerPage.addbtn);
                                                          element.fillfield(managerPage.fnameField, manager.customer.firstname);
                                                          element.fillfield(managerPage.lnameField, manager.customer.lastname);
                                                          cy.get(managerPage.postField).invoke('val').should('to.be.empty');
                                                             cy.get(managerPage.submitbtn).click();
                                                      
                                                          cy.on(managerPage.alert,(t)=>{
                                                             //assertions
                                                             expect(t).to.contains("Please fill out this field.");
                                                          })
                                                        
                                             
                                                      })
               
                   
                    
                  

});

describe('Feature : Show Data Customer', () => {
  beforeEach(() =>{
      route.visit(ROUTES.manager);
  });
  it('Scenario 1: To ensure manager can see list customers', () => {
  
            element.click(managerPage.customerBtn);
                cy.get('table')
                .find('tbody .ng-scope')
                .find('.ng-binding').first()
                .should('have.text', 'Hermoine')  
                .invoke('text');
                  // .should(cb) callback function will be retried

                  cy.get(managerPage.deleteBtn).first().should('have.text', 'Delete');
                
     
              })
              it('Scenario 2: To ensure manager can search by firstname and lastname to find the customers', () => {
                route.visit(ROUTES.list);
             
                    cy.get('table')
                    .find('tbody .ng-scope')
                    .find('.ng-binding').first()
                    .should('have.text', 'Hermoine')  
                    .invoke('text');
                    cy.get(managerPage.deleteBtn).first().should('have.text', 'Delete');
                    element.fillfield(managerPage.searchfield, manager.nameCust.name);
                    cy.get('.ng-binding').contains('td', 'Hermoine', manager.nameCust.name).should('be.visible');
         
              })
                  it.only('Scenario 3: To ensure manager can delete the customers data', () => {
                    route.visit(ROUTES.list);
             
                    cy.get('table')
                    .find('tbody .ng-scope');
                  
                    cy.get('#tbody tr')
                    // by adding an assertion like this
                    // we support an empty initial list without any items
                    .should('have.length.gte', 0)
                    .its('length')
                    .then((N) => {
                      // if N is zero, nothing to delete
                      if (N === 0) {
                        return
                      }
                      // delete one element
                      cy.get(managerPage.deleteBtn).click()
                      // fetch the list items; there should be N - 1 items
                      cy.get('#tbody tr').should('have.length', N - 1)
                    })
                   
            
              });
              it.only('Scenario 4: To ensure manager can process open account of the customers', () => {
                /*test case code in here
                    element.fillfield(loginPage.usernameField, login.INVALID_LOGIN_DATA.username);
                    element.fillfield(loginPage.passwordField, login.INVALID_LOGIN_DATA.password);
                    element.click(loginPage.loginButton);
                    assert.shouldContainText(loginPage.errorMessage,"Epic sadface: Username and password do not match any user in this service" );*/
                  
                        // select usernmae
                    
                        // at first, no option should be selected
                        element.click(managerPage.openBtn);
                        cy.get(managerPage.userSelect)
                        assert.shouldContainText(managerPage.userSelect,"---Customer Name---");
                    
                        // Select option(s) with matching text content
                       cy.get(managerPage.userSelect).select('1');
                     
                        cy.get(managerPage.userSelect).select('2');
                        cy.get(managerPage.userSelect).select('3');
                        cy.get(managerPage.userSelect).select('4');
                        cy.get(managerPage.userSelect).select('5');

                     
                        cy.get(managerPage.currency)
                        assert.shouldContainText(managerPage.currency,"---Currency---");
                    
                        // Select option(s) with matching text content
                       cy.get(managerPage.currency).select('Dollar');
                     
                        cy.get(managerPage.currency).select('Pound');
                        cy.get(managerPage.currency).select('Rupee');
                  
                        cy.get(managerPage.submitbtn).click();           
                        cy.on(managerPage.alert,(t)=>{
                           //assertions
                           expect(t).to.contains("Account created successfully with account Number :"+acctNo);
                        })
                     
                  
                      });
                   


});