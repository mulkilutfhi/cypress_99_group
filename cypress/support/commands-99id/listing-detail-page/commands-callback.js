Cypress.Commands.add('SelectListing', () => {
    cy.get(
        '.search-card-redesign__address > [href="/id/properti/rumah-dijual-1-3mily-rantepao-523437901"]'
    )
        .eq(0)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .wait(3000)
        .click({ force: true })
        .wait(5000);
});

Cypress.Commands.add('selectListingVl', () => {
    cy.get(
        '.search-card-redesign__address > [href="/id/properti/rumah-dijual-1-4mily-agisiga-masuk-649857406"]'
    )
        .eq(0)
        .scrollIntoView()
        .invoke('removeAttr', 'target')
        .wait(2000)
        .click({ force: true })
        .wait(3000);
});

Cypress.Commands.add('inputName', (Name) => {
    const inputName = cy.get('#agentcallbackformmodel-fullname');
    if (Name !== undefined) {
        inputName.type(Name, { force: true });
    } else {
        inputName.clear();
        inputName.type(Name, { force: true });
    }
});

Cypress.Commands.add('inputPhone', (Phone) => {
    const inputPhone = cy.get('#agentcallbackformmodel-telephone');
    if (Phone !== undefined) {
        inputPhone.type(Phone, { force: true });
    } else {
        inputPhone.clear();
        inputPhone.type(Phone, { force: true });
    }
});

Cypress.Commands.add('inputNameVl', (NameVl) => {
    const input_name_vl = cy
        .get(
            '#callback-form-37767344-649857406 > #form-callback-form-37767344-649857406 > div:nth-child(2) > div:nth-child(4) > input[placeholder="Masukkan Nama Lengkap"]'
        )
        .eq(1);
    if (NameVl !== undefined) {
        input_name_vl.type(NameVl, { force: true });
    } else {
        input_name_vl.clear();
        input_name_vl.type(NameVl, { force: true });
    }
});

Cypress.Commands.add('inputPhoneVl', (PhoneVL) => {
    const input_phone_vl = cy
        .get(
            '#callback-form-37767344-649857406 > #form-callback-form-37767344-649857406 > div:nth-child(2) > div:nth-child(5) > input[placeholder="Masukkan No Telepon"'
        )
        .eq(1);
    if (PhoneVL !== undefined) {
        input_phone_vl.type(PhoneVL, { force: true });
    } else {
        input_phone_vl.clear();
        input_phone_vl.type(PhoneVL, { force: true });
    }
});

Cypress.Commands.add('doClickCarikanSayaProperti', () => {
    cy.get('.property-secondary__agent__button').click({ force: true });

    cy.intercept({
        method: 'GET',
        url: '/id/ajax/multiple-enquiry?propertyId=523437901'
    }).as('wait_callback_success');

    cy.wait('@wait_callback_success', { timeout: 15000 })
        .its('response.statusCode')
        .should('eq', 200);
});

Cypress.Commands.add('doClickCarikanSayaProperti_VL', () => {
    cy.get(
        '.popover-content > .agent-contact-detail-list > #callback-form-37767344-649857406 > .agent-form > #form-callback-callback-form-37767344-649857406 > .btn-primary'
    ).click();
    cy.intercept({
        method: 'GET',
        url: '/id/ajax/multiple-enquiry?propertyId=649857406'
    }).as('wait_multipleinquiry');
    cy.wait('@wait_multipleinquiry', { timeout: 15000 })
        .its('response.statusCode')
        .should('eq', 200);
});

Cypress.Commands.add('validation_el_multiple_inquiry', () => {
    const card = '.card-property-suggestion';
    const img = '.card-property-suggestion__picture';
    const title = '.card-property-suggestion__info__title';
    const address = '.card-property-suggestion__info__address';
    const listing_type = '.card-property-suggestion__info__listing-type';
    const price = '.card-property-suggestion__info__price';

    let elment_multiple_inquiry = [
        card,
        img,
        title,
        address,
        listing_type,
        price
    ];
    let i;

    for (i = 0; i < elment_multiple_inquiry.length; i++) {
        cy.get(elment_multiple_inquiry[i]).should('be.visible');
    }
});

Cypress.Commands.add('validation_wa_button_multipleinquiry', () => {
    cy.get('.card-property-suggestion__whatsapp').should('be.visible');
    cy.get('.listing-suggestion-title')
        .contains('Properti telah dikontak!')
        .should('be.visible');
});

Cypress.Commands.add('click_button_propertilainya', function () {
    cy.get('.other-recommended-properties').click();
    //validation finish landing to SRP
    cy.get('.search-title__keyword').then(($el) => {
        const element_text = $el.text();

        cy.wrap($el).should('be.visible');
        cy.log(element_text);
    });
});

Cypress.Commands.add('listingURL_99Exclusive', () => {
    cy.visit(
        '/singapore/sale/property/joo-chiat-apartments-condo-yBhtWdcdjatQ4mPebf6EaC'
    );

    //add wait time after visit
    cy.scrollTo('0%', '35%', { duration: 2000 });
    cy.get('[aria-label="Map"]').should('exist');
});

Cypress.Commands.add('listingURL_MustSee', () => {
    cy.visit(
        '/singapore/sale/property/reflections-at-keppel-bay-condo-QcLAy7aSoYVaEfjKHZM3iC'
    );

    //add wait time after visit
    cy.scrollTo('0%', '35%', { duration: 2000 });
    cy.get('[aria-label="Map"]').should('exist');
});

Cypress.Commands.add('listingURL_Regular', () => {
    cy.visit(
        '/singapore/sale/property/reflections-at-keppel-bay-condo-ruiZHPk83Uwf3hUm8onawZ'
    );

    //add wait time after visit
    cy.scrollTo('0%', '21%', { duration: 2000 });
    cy.get('[aria-label="Map"]').should('exist');
});

Cypress.Commands.add('listingURL_99Exclusive_M', () => {
    cy.visit(
        '/singapore/sale/property/joo-chiat-apartments-condo-yBhtWdcdjatQ4mPebf6EaC?__mobile'
    );

    //add wait time after visit
    cy.scrollTo('0%', '35%', { duration: 2000 });
    cy.get('[aria-label="Map"]').should('exist');
});

Cypress.Commands.add('listingURL_MustSee_M', () => {
    cy.visit(
        '/singapore/sale/property/reflections-at-keppel-bay-condo-QcLAy7aSoYVaEfjKHZM3iC?__mobile'
    );

    //add wait time after visit
    cy.scrollTo('0%', '35%', { duration: 2000 });
    cy.get('[aria-label="Map"]').should('exist');
});

Cypress.Commands.add('listingURL_Regular_M', () => {
    cy.visit(
        '/singapore/sale/property/reflections-at-keppel-bay-condo-ruiZHPk83Uwf3hUm8onawZ?__mobile'
    );

    //add wait time after visit
    cy.scrollTo('0%', '21%', { duration: 2000 });
    cy.get('[aria-label="Map"]').should('exist');
});
