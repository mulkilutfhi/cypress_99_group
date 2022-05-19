describe ('Set Filter by Property Type', () => {

	beforeEach(function() {
		cy.viewport('macbook-15')
		cy.visit('/')
	});

	it('C33514 Filter tipe properti Residensial', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(0).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/residensial/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33515 Filter tipe properti Rumah', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(1).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/rumah/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33516 Filter tipe properti Apartemen', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(2).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/apartemen/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33517 Filter tipe properti Ruko', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(3).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/ruko/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33518 Filter tipe properti Tanah', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(4).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/tanah/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33519 Filter tipe properti Pabrik', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(5).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/pabrik/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33520 Filter tipe properti Kantor', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(6).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/kantor/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33521 Filter tipe properti Gudang', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(7).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/gudang/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33522 Filter tipe properti Ruang Usaha', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('.SelectLabelstyle__SelectLabelWrapper-fwSdAo > .SelectLabelstyle__Label-hNxEFn').contains('Residensial').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > li').eq(8).click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(3000)
		cy.url().should('include','jual/bandung/ruang-usaha/').reload()
		cy.get('.header-main').scrollIntoView()
	});

	it('C33523 Filter tipe properti dan harga', function() {
		cy.get('.ant-select-selection__rendered > ul > li').find('.ant-select-search__field').type('bandung',{force:true})
		cy.wait(2000)
		cy.get('.ant-select-dropdown-menu-item-group-list > li').eq(0).click()
		cy.get('[data-test-id="subChannel"] > .select-label-wrapper > .SelectLabelstyle__Label-hNxEFn').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > :nth-child(2)').contains('Properti baru').click()
		cy.get('[data-test-id="minPrice"] > .select-label-wrapper > .SelectLabelstyle__Label-hNxEFn').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > :nth-child(7)').contains('500Jt').click()
		cy.get('[data-test-id="maxPrice"] > .select-label-wrapper > .SelectLabelstyle__Label-hNxEFn').click()
		cy.get('.SelectMenustyle__SelectMenuUl-jjEkvx > :nth-child(12)').contains('1M').click()
		cy.get('.search-button > .ant-btn').click()
		cy.wait(5000)
		cy.url().should('include','jual/bandung/residensial').reload()
		cy.get('.header-main').scrollIntoView()
		cy.get('[data-test-id="subChannel"] > .select-label-wrapper > .SelectLabelstyle__Label-hNxEFn').should('have.text','Properti baru')
		cy.get('[data-test-id="minPrice"] > .select-label-wrapper > .SelectLabelstyle__Label-hNxEFn').should('have.text','Rp. 500Jt')
		cy.get('[data-test-id="maxPrice"] > .select-label-wrapper > .SelectLabelstyle__Label-hNxEFn').should('have.text','Rp. 1M')
	});
});