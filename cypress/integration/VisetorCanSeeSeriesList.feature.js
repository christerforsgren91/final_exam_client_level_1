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

  describe('Visitor can see header', () => {
    it('is expected to show header', () => {
      cy.get('[data-cy=header]').should('exist');
      cy.get('[data-cy=header-title]').should('contain', 'Viaplay');
      cy.get('[data-cy=header-logo]').should('exist');
    });
  });

  describe('Visitor can se series cards', () => {
    it('successfully display list of series', () => {
      cy.get('[data-cy=series-container]').within(() => {
        cy.get('[data-cy=series-title]').should('contain', "Grey's Anatomy");
        cy.get('data-cy=serie-card').should(
          'have.attr',
          'href',
          'https://i-viaplay-com.akamaized.net/viaplay-prod/990/580/1601988235-2e6920a94b2b30019f47c286074c93ecdc0407d0.jpg?width=199&height=298&template=abcstudios'
        );
      });
    });
  });
});
