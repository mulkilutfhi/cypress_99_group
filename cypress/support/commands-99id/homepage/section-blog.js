Cypress.Commands.add('checking_length_card_blog',function()
    {
        cy
          .get('[itemprop="itemListElement"]')
          .then(card_blog =>{
            expect(card_blog).to.have.length(6)
        })
    })

    Cypress.Commands.add('checking_img_blog',function()
    {
        cy
            .get('.card-blog > figure')
            .then(img_blog=>
                {
                    expect(img_blog).to.be.visible
                    expect(img_blog).to.have.length(6)
                })
    })

    Cypress.Commands.add('checking_published',function()
    {
        cy
            .get('[itemprop="datePublished"]')
            .then(published=>
                {
                    expect(published).to.be.visible
                    expect(published).to.have.length(6)
                    expect(published.text()).include('yang lalu')
                })
    })

    Cypress.Commands.add('checking_title_blog',function()
    {
        cy
            .get('.grid__title__name > a')
            .then(title_blog=>
                {
                    expect(title_blog).to.have.length(6)
                    expect(title_blog).to.be.visible
                })
    })
    Cypress.Commands.add('checking_selengkapnya',function()
    {
        cy
            .get('.grid__title__more > a')
            .then(selengkapnya=>
                {
                    expect(selengkapnya).to.be.visible
                    expect(selengkapnya).to.have.length(6)
                    expect(selengkapnya.text()).include('Baca Selengkapnya')

                    cy
                        .get(selengkapnya).eq(0).scrollIntoView()
                        .invoke('removeAttr','target')
                        .invoke('removeAttr','onclick')
                        .wait(3000)
                        .click({force:true})
                        .wait(3000)

                    cy
                        .url().should('include','/blog/indonesia')
                        .go('back')
                })
    })
