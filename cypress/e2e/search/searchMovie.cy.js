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
    })

    it('.should() - perform search on submit button', () => {
      cy.get('#searchMoviesInput')
        .type('titanic')

      cy.get('#searchMoviesButton')
        .click()

      cy.get('[data-testid="searchResult"]')
        .first()
        .should('be.visible')
    })
  })
})
