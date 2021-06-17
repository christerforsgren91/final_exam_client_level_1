describe('Visitor can see list of series', () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: 'GET',
      url: 'https://content.viaplay.se/pc-se/serier/samtliga',
      response: 'fixture:series.json',
    });
    cy.visit('/');
  });

  it('successfully display list of series', () => {
    cy.get('[data-cy=series-container]').within(() => {
      cy.get('[data-cy=series-title]').should('contain', "Grey's Anatomy");
    });
  });
});
