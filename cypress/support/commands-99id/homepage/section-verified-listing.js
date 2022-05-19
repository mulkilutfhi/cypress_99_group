Cypress.Commands.add('title_verified_listing',()=>
    {
        cy
            .get('.homepage__latest-property__title')
            .then(($title_verified_listing)=>
            {
                expect($title_verified_listing).to.be.visible
            })
    })

    Cypress.Commands.add('button_LIHATLAINYA_verified',()=>
    {
        cy
            .get('[href="/id/jual/rumah?dijamin=1"]')
            .invoke('removeAttr','target')
            .click({force:true})
            .url().should('include','/jual/rumah?dijamin=1')
            .go('back')
    })

    Cypress.Commands.add('checking_all_content_verified',()=>
    {
        for (let i = 0; i<=19; i++)
        {
            cy
              .get('.search-card__verified-listing').eq(i)
              .then(vl_badge=>
                {
                    expect(vl_badge).to.be.visible
                })
            cy
              .get('.property-type').eq(i)
              .then(property_type=>
                {
                    expect(property_type).to.be.visible
                    cy.log(property_type.text())
                })
            // cy 
            //   .get('.search-card-redesign__title > span').eq(i)
            //   .then(price=>
            //     {
            //         expect(price).to.be.visible
            //         cy.log(price.text())
            //     })
            cy
              .get('.search-card-redesign__mortgage-affiliate').eq(i)
              .then(installments=>
                {
                    expect(installments).to.be.visible
                    cy.log(installments.text())
                })
            cy
              .get('.long-title').eq(i)
              .then(title=>
                {
                    expect(title).to.be.visible
                    cy.log(title.text())
                })
            cy 
              .get('.bedrooms > abbr').eq(i)
              .then(bedrooms=>
                {
                    expect(bedrooms).to.be.visible
                    cy.log('Kamar Tidur' + bedrooms.text())
                })
            cy 
              .get('.bathrooms > abbr').eq(i)
              .then(bathrooms=>
                {
                    expect(bathrooms).to.be.visible
                    cy.log('Kamar Mandi' + bathrooms.text())
                })
            cy 
              .get('.buildingSize > abbr').eq(i)
              .then(buildingsize=>
                {
                    expect(buildingsize).to.be.visible
                    cy.log('Luas Bangunan' + buildingsize.text())
                })
            cy 
              .get('.landSize > abbr').eq(i)
              .then(landsize=>
                {
                    expect(landsize).to.be.visible
                    cy.log('Luas Tanah' + landsize.text())
                })

            if (i !== 0,1,2)
            {
                cy
                    .wait(2000)
                    .get('#latest-secondary > .urbanindo-carousel-nav__next > .material-icons')
                    .wait(1000)
                    .click({force:true})
                    .wait(1000)
            }else{
                cy.end()
            }
        }   
    })
