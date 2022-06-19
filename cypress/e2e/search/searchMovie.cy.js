/// <reference types="cypress" />

context('Search', () => {
  beforeEach(() => {
    cy.visit('https://search-movie-rho.vercel.app/')
  })

  describe('can type into search field', () => {
    it('.should() - type into search field', () => {
      cy.get('#searchMoviesInput')
        .type('titanic')
        .should('have.value', 'titanic')
    })

    it('.should() - perform search on enter', () => {
      cy.get('#searchMoviesInput')
        .type('titanic')
        .type('{enter}')

      cy.get('[data-testid="searchResult"]')
        .first()
        .should('be.visible')

      // for more information about asserting element's text
      // see https://on.cypress.io/using-cypress-faq#How-do-I-get-an-element’s-text-contents
    })
  })
})
