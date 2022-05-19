describe('Mobile automation for section Kenapa Rumah123?', function(){

  let data
  beforeEach(function () {
		cy.viewport('iphone-x').visit('/');
    cy.intercept('GET','https://securepubads.g.doubleclick.net/gampad/*').as('PageLoaded')
	});

  it('C67884 New section should have title Kenapa Rumah123?', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})
  })

  it('C67885 Click linktext from card Beli Properti Aman & Mudah', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})    
    cy.getElement('hp-linktext-card-kenapa-r123').eq(0).click()
    cy.url().should('include', '/jual/')
  })

  it('C67886 Click linktext from card Jual Properti Cepat', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})
    cy.getElement('hp-linktext-card-kenapa-r123').eq(1).click()
    cy.url().should('include', '/agen-registrasi/')
  })

  it('C67887 Click linktext from card Mitra Properti Terbaik', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})    
    cy.getElement('hp-linktext-card-kenapa-r123').eq(2).click()
    cy.url().should('include', '/agen-registrasi/')
  })

  it('C67888 Click linktext from card Info KPR Terlengkap', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})    
    cy.getElement('hp-linktext-card-kenapa-r123').eq(3).click()
    cy.url().should('include', '/cari-kpr/')
  })

  it('C67889 Check wording in card Beli Properti Aman & Mudah', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})    
    cy.getElement('hp-wording-card-kenapa-r123').eq(0)
      .should('have.text','Rumah123.com sebagai situs properti terpercaya siap membantu menemukan hunian idaman Anda')
  })

  it('C67890 Check wording in card Jual Properti Cepat', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})    
    cy.getElement('hp-wording-card-kenapa-r123').eq(1)
      .should('have.text','Jual properti lebih mudah dan cepat dengan fitur dan layanan terbaik Rumah123.com')
  })

  it('C67891 Check wording in card Mitra Properti Terbaik', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})    
    cy.getElement('hp-wording-card-kenapa-r123').eq(2)
      .should('have.text','Rumah123.com adalah situs properti terbesar dan terpercaya yang telah melayani jutaan masyarakat Indonesia.')
  })

  it('C67892 Check wording in card Info KPR Terlengkap', function(){
    cy.wait('@PageLoaded')
      .its('response.statusCode').should('equal', 200)
    cy.scrollandCheck({element:'hp-title-section',
                        n:3,
                        sectionTitle:'Kenapa Rumah123?'})    
    cy.getElement('hp-wording-card-kenapa-r123').eq(3)
      .should('have.text','Dapatkan hunian terjangkau dan cari tahu biaya cicilan rumah atau properti lainnya lewat simulasi KPR di Rumah123.com')
  })
})