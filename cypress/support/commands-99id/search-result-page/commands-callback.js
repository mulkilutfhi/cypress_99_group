Cypress.Commands.add('SelectListing_CTAKontak_SRP',()=>{
    //button kontak, if will hit another lsiting please chamge the listing title and id attribute
    cy
        .get('.search-card-redesign__address')
        .each(($el, index, $list)=>{
        if($el.text().includes('listing testing 2'))
        {
            cy
                .get('.search-card-redesign__footer > div:nth-child(2) > button[id="page-list-view-item-agent-contact-523437901"]') 
                .scrollIntoView()
                .wait(2000)
                .click({force:true})
                .wait(2000)
        }
    })
})


Cypress.Commands.add('input_name',(Name)=>{
    cy //if u want to change the listing, please change the id number also
    .get('.group-form').last()
    .find('.field-agentcallbackformmodel-fullname > input') //field name
    .type(Name,{force:true})
    .wait(2000)
})

Cypress.Commands.add('input_phone_number',(phone_number)=>{
    cy //if u want to change the listing, please change the id number also
    .get('.group-form').last()
    .find('.field-agentcallbackformmodel-telephone > input') // field phone
    .type(phone_number,{force:true})
    .wait(2000)
})


Cypress.Commands.add('validation_name',()=>
{
    cy
    .get('#callback-form-37767344-649857406 > div > div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(1)').eq(1)
    .then(valid_callback_name=>{
        expect(valid_callback_name.text()).eq('testing')
    })
})

Cypress.Commands.add('validation_phone_number',()=>
{
    cy
    .get('#callback-form-37767344-649857406 > div > div:nth-child(2) > div:nth-child(2) > div > div > p:nth-child(2)').eq(1)
    .then(valid_callback_phone=>{
        expect(valid_callback_phone.text()).eq('08222222222')
    })
})
