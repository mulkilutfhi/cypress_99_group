describe('GRAPHQL location', () => {
    before(() => {
        cy.getJwtToken()
    });
    
    it('C63264 Location Suggestion Contract Checking', () => {
        let query = `query {
            LocationSuggestion(keyword: "Bandung") {
                uuid
                district {
                    id
                    name
                    label
                }
            }
        }`;
        cy.get('@jwtToken').then(authJwt => {
            cy.requestRaptor(authJwt,query).should((response) => {
                let jmlData = Object.keys(response.body.data.LocationSuggestion).length
                expect(response.status).to.equal(200)
                expect(jmlData).to.equal(10)
                expect(response.body.data.LocationSuggestion[0]).to.have.property('uuid');
                expect(response.body.data.LocationSuggestion[0]).to.have.property('district');
                expect(response.body.data.LocationSuggestion[0].district).to.have.property('id');
                expect(response.body.data.LocationSuggestion[0].district).to.have.property('name');
                expect(response.body.data.LocationSuggestion[0].district).to.have.property('label');
                
            });
        })
    });

});