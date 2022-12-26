export const BASE_URL ={
    DASHBOARD: Cypress.env('base_url')
}

export function visit(routes){
    cy.visit(BASE_URL.DASHBOARD + routes);
}