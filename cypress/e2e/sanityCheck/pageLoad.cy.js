/// <reference types="cypress" />

context('Sanity check', () => {
  describe('page loads', () => {
    it('.should() - load page', () => {
      cy.visit('https://search-movie-rho.vercel.app/')

      cy.get('#searchMoviesInput').should('be.visible')
    })
  })
})
