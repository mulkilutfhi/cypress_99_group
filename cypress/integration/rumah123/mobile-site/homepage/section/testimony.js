describe('Mobile automation for section Testimony', function(){

  let data
  beforeEach(function () {
		cy.viewport('iphone-x').visit('/');
    cy.intercept('GET','https://securepubads.g.doubleclick.net/gampad/*').as('PageLoaded')
	});

  it('C68638 New section should have title Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
  })

  it('C68639 Testimoni section should displayed 3 cards from different users', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    cy.getElement('hp-testimony-card-wrapper').find('.ui-molecules-carousel-v2__slide').should('have.length',3)
  })

  it('C68640 Card testimony should displayed the user thumbnail image', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    cy.getElement('hp-testimony-card-wrapper').find('[alt="Testimoni 1"]').should('be.visible')
  })

  it('C68641 User thumbnail on card testimony should not be broken', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    cy.getElement('hp-testimony-card-wrapper').find('[alt="Testimoni 1"]')
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })

  it('C68642 Card title should inform about user name', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    for (let i = 0; i < 3; i++) {
      cy.getElement('hp-testimony-title').eq(i)
        .and(() => {
          expect('hp-testimony-title').to.be.a('string')
        })
    }
  })

  it('C68643 Card title should not be empty', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    for (let i = 0; i < 3; i++) {
      cy.getElement('hp-testimony-title').eq(i)
        .and(() => {
          expect('hp-testimony-title').to.not.empty
        })
    }
  })

  it('C68644 Text below card title should inform about user role', function(){
    const roles = ['Agen', 'Pembeli']
    const regex = new RegExp(`${roles.join('|')}`)

    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    cy.getElement('hp-testimony-roles').contains(regex)
  })

  it('C68645 Text user roles should not be empty', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    for (let i = 0; i < 3; i++) {
      cy.getElement('hp-testimony-roles').eq(i)
        .and(() => {
          expect('hp-testimony-roles').to.not.empty
        })
    }
  })

  it('C68646 Testimony message should be displayed on each testimony card', function(){
    const messages = ['rumah123', 'bagus', 'sukses']
    const regex = new RegExp(`${messages.join('|')}`)
    
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    cy.getElement('hp-testimony-wording').contains(regex)
  })

  it('C68647 Testimony wording should not be empty', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:4,
                        sectionTitle:'Kata Mereka yang Sudah Menggunakan Layanan Rumah123.com'})
    for (let i = 0; i < 3; i++) {
      cy.getElement('hp-testimony-wording').eq(i)
        .and(() => {
          expect('hp-testimony-wording').to.not.empty
        })
    }
  })
  
})