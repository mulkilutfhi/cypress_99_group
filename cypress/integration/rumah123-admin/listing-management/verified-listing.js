describe('Verified Listing menu', function() {
  let data

  context('Filtering by Property Type', function() {

	beforeEach(function() {
		cy.viewport('macbook-15')
		Cypress.Cookies.preserveOnce('CAKEPHP')

		cy.fixture('rumah123-legacy/json-file/credential').then((creds)=>
		{
			data = creds;
		});
	});

	it('C336 Accessing VL Menu', function() {
		cy.visit('https://stg.admin.rumah123.com/')

		cy.get('#UserEmail').type(data.usernameAdmin)
		cy.get('#UserPassword').type(data.passwordAdmin)
		cy.get(':nth-child(4) > input').click()
		cy.url().should('contain', '/dashboard')
		cy.get('.sidebar-menu > li').eq(19).as('ListingMenu')
		cy.get('@ListingMenu').scrollIntoView()
		cy.wait(2000)
		cy.get('@ListingMenu').click()
		cy.get('.active > .treeview-menu > li').eq(3).as('VLmenu')
		cy.get('@VLmenu').click()
		cy.wait(2000)
	});

	it('C337 Filter vl data by property type Rumah', function() {
		cy.intercept('POST', '/ListingManagement/VerifiedListing/ajaxGetDataTable').as('ResultFilter')
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Rumah').click()
		cy.get('.action-search').click()
		cy.wait('@ResultFilter').its('response.statusCode').should('eq', 200)
	});

	it('C338 Filter vl data by property type Apartemen', function() {
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Apartement').click()
		cy.get('.action-search').click()
		cy.wait(2000)
	});

	it('C339 Filter vl data by property type Ruko', function() {
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Ruko').click()
		cy.get('.action-search').click()
		cy.wait(2000)
	});

	it('C340 Filter vl data by property type Tanah', function() {
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Tanah').click()
		cy.get('.action-search').click()
		cy.wait(2000)
	});

	it('C341 Filter vl data by property type Pabrik', function() {
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Pabrik').click()
		cy.get('.action-search').click()
		cy.wait(2000)
	});

	it('C342 Filter vl data by property type Kantor', function() {
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Kantor').click()
		cy.get('.action-search').click()
		cy.wait(2000)
	});

	it('C343 Filter vl data by property type Gudang', function() {
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Gudang').click()
		cy.get('.action-search').click()
		cy.wait(2000)
	});

	it('C344 Filter vl data by property type Ruang Usaha', function() {
		cy.get('#property_type_chosen').click()
		cy.get('.content').find('.chosen-results').eq(0).contains('Ruang Usaha').click()
		cy.get('.action-search').click()
		cy.wait(2000)
	});

	it('clearcookies', ()=>
	{
		cy.clearCookies()
	});

});

	context('Filtering by Province, City and Area', function() {

	beforeEach(function() {
		cy.viewport('macbook-15')
		Cypress.Cookies.preserveOnce('CAKEPHP')
	});

	it('C336 Accessing VL Menu', function() {
		cy.visit('https://stg.admin.rumah123.com/')
		cy.get('#UserEmail').type('allit@rumah123.com')
		cy.get('#UserPassword').type('q2W652Jd')
		cy.get(':nth-child(4) > input').click()
		cy.url().should('contain', '/dashboard')
		cy.get('.sidebar-menu > li').eq(19).as('ListingMenu')
		cy.get('@ListingMenu').scrollIntoView()
		cy.wait(2000)
		cy.get('@ListingMenu').click()
		cy.get('.active > .treeview-menu > li').eq(3).as('VLmenu')
		cy.get('@VLmenu').click()
		cy.wait(2000)
	});

	it('C446 Select Province', function() {
		cy.intercept('POST', '/ListingManagement/VerifiedListing/ajaxGetDataTable').as('ResultFilter')
		cy.get('#province_id_chosen').click()
		cy.get('.content').find('.chosen-search').eq(1).type('Jawa')
		cy.get('.active-result').each(($li, index, $list) =>
		{
			if($li.text()==='Jawa Barat')
			{
				cy.wrap($li).click()
			}
		})
		cy.get('.action-search').click()
		cy.wait('@ResultFilter').its('response.statusCode').should('eq', 200)
	});

	it('C447 Select City', function() {
		cy.intercept('POST', '/ListingManagement/VerifiedListing/ajaxGetDataTable').as('ResultFilter')
		cy.get('#city_id_chosen').click()
		cy.get('.content').find('.chosen-search').eq(2).type('Ban')
		cy.get('.active-result').each(($li, index, $list) =>
		{
			if($li.text()==='Bandung')
			{
				cy.wrap($li).click()
			}
		})
		cy.get('.action-search').click()
		cy.wait('@ResultFilter').its('response.statusCode').should('eq', 200)
	});

	it('C448 Select Area', function() {
		cy.intercept('POST', '/ListingManagement/VerifiedListing/ajaxGetDataTable').as('ResultFilter')
		cy.get('#area_id_chosen').click()
		cy.get('.content').find('.chosen-search').eq(3).type('A')
		cy.get('.active-result').each(($li, index, $list) =>
		{
			if($li.text()==='Awiligar')
			{
				cy.wrap($li).click()
			}
		})
		cy.get('.action-search').click()
		cy.wait('@ResultFilter').its('response.statusCode').should('eq', 200)
	});

	it('clearcookies', ()=>
	{
		cy.clearCookies()
	})
});

	context('VL Activation', function() {

	beforeEach(function()
	{
		cy.viewport('macbook-15')
		Cypress.Cookies.preserveOnce('CAKEPHP')
	});

	it('C336 Accessing VL Menu', function() {
		cy.visit('https://stg.admin.rumah123.com/')
		cy.get('#UserEmail').type('allit@rumah123.com')
		cy.get('#UserPassword').type('q2W652Jd')
		cy.get(':nth-child(4) > input').click()
		cy.url().should('contain', '/dashboard')
		cy.get('.sidebar-menu > li').eq(19).as('ListingMenu')
		cy.get('@ListingMenu').scrollIntoView()
		cy.wait(2000)
		cy.get('@ListingMenu').click()
		cy.get('.active > .treeview-menu > li').eq(3).as('VLmenu')
		cy.get('@VLmenu').click()
		cy.wait(2000)
	});

	it('C449 Search ID', function() {
		cy.get('.select2-search__field').type('hos3601')
		cy.wait(2000)
		cy.get('.select2-results > ul > li').eq(0).as('ListingID')
		cy.get('@ListingID').click()
		cy.get('.select2-selection__choice').then(function(listingid)
		{
			cy.log(listingid.text())
		})
		cy.wait(2000)
		cy.get('.action-add').click()
	});

	it('C450 Upload VL image', function() {
		cy.fixture('rumah123-legacy/images/sample-vl-image.jpg').then(fileContent => {
			cy.get('#ListingEditVlImage').attachFile({
				fileContent: fileContent.toString(),
				fileName: 'sample-vl-image.jpg.jpg',
				mimeType: 'image/jpg'
			});
		});
	});

	it('clearcookies', () => {
		cy.clearCookies()
		});
	});
});
