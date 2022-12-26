//assertion untuk pesan error
export function shouldContainText(selector, ...args){
    return cy.get(selector).should('contain', ...args);
}