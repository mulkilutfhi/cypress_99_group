describe('API Location', () => {
    
    it('GET Province ALL', () => {
        cy.request({
            method: 'GET',
            url: '/consumer/v1/province?limit=100',
            headers: {
                'Content-Type': Cypress.env('contentType'),
                'X-Client-Type': Cypress.env('xClientType')
            },
        }).should((response) => {
            let jmlData = Object.keys(response.body.data).length
            expect(response.body.code).to.equal(200)
            expect(jmlData).to.be.greaterThan(0)
            expect(response.body.data[0]).to.have.property('lat')
            expect(response.body.data[0]).to.have.property('lng')
            expect(response.body.data[0]).to.have.property('province_name')
            expect(response.body.data[0]).to.have.property('province_id')
            expect(response.body.data[0]).to.have.property('name')
            expect(response.body.data[0].province_name.length).to.be.greaterThan(0)
            expect(response.body.data[0].province_id.length).to.be.greaterThan(0)
        });
    });

});