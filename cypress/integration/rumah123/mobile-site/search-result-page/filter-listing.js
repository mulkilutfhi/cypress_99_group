describe('Msite SRP Filter Listing', () => {

    beforeEach(() => {
        cy.viewport('iphone-x')
    });

    it('Visit SRP', () => {
        cy.visitPage('srp-residensial-page')
    });

    it('Cek filter SRP Msite', () => {
        cy.visitPage('srp-residensial-page')
        cy.getElement('button-srp-filter').trigger('click')
        cy.getElement('checkbox-dijual').invoke('text').should('contains', 'Dijual')
        
        cy.get('label[for="rent"] > span').invoke('text').should('contains', 'Disewa')
        
    });
});