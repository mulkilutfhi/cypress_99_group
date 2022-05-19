Cypress.Commands.add('checking_heading_primary_projects',()=>
    {
        cy
            .get('.primary-projects-features__intro > h2')
            .should(($heading)=>
            {
                expect($heading).to.have.text('Properti Pilihan 99.co')
                expect($heading).to.visible
            })
    })

    Cypress.Commands.add('checking_button_LIHATLAINNYA_primaryprojects',()=>
    {
        cy
            .get('.primary-projects-features__intro > a').click({force:true})
            .url().should('include','/projects')
            .go('back')
    })

    Cypress.Commands.add('checking_all_alement_primaryprojects',()=>
    {
        // TODO checking all element and slider in primary projects
        let i;
        for (i=0; i<=9; i++)
        {
                cy.get('.card.card-transaction-other.transaction-infobox').eq(i)
                  .then(card =>
                    {
                        expect(card).to.be.visible
                    })
                cy.get('.card-transaction-other__image').eq(i)
                  .then(img =>
                    {
                        expect(img).to.be.visible
                    })
                
                cy.get('.card-transaction-other__title > .h4').eq(i)
                  .then(title =>
                    {
                        expect(title).to.be.visible
                        cy.log(title.text())
                    })
                cy.get('.card-transaction-other__info > p').eq(i)
                  .then(address =>
                    {
                        expect(address).to.be.visible
                        cy.log(address.text())
                    })
                cy.get('.card-transaction-other__price > p').eq(i)
                  .then(price =>
                    {
                        expect(price).to.be.visible
                        cy.log(price.text())
                    })
                
                if (i !== 0,2,4,6)
                {
                    cy
                        .wait(2000)
                        .get('.urbanindo-carousel-nav__link.urbanindo-carousel-nav__next').eq(0)
                        .click({force:true})
                }else{
                    cy.end()
                }
        }
    })

    Cypress.Commands.add('click_one_of_listingprimary',()=>
    {
        cy
            .get('.card.card-transaction-other')
            .each(($el,index,$list)=>
            {
                if ($el.find('href','/id/projects/eastern-green-lrt-city-bekasi-2064'))
                    {
                        cy
                            .get($el)
                            .invoke('removeAttr','target')
                            .click()            
                    }
            })
                    
                    
    })
