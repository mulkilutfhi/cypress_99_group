describe('validation all submenu in navbar should be accessable', () => {

	beforeEach(function () {
    cy.viewport('macbook-15').visit('/');
	});

	it('C2233	Dijual Rumah', function () {
		const rumahDijual = '[href="/id/jual/rumah"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Dijual')
			.trigger('mouseover')
			.get(rumahDijual)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_JualRumah) => {
			expect(url_JualRumah).to.include('/jual/rumah');
		});
	});

	it('C2234	Dijual Apartemen', function () {
		const apartemenDijual = '[href="/id/jual/apartemen"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Dijual')
			.trigger('mouseover')
			.get(apartemenDijual)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_JualApartemen) => {
		expect(url_JualApartemen).to.include('/jual/apartemen');
		});
	});

	it('C2235	Dijual Tanah ', function () {
		const tanahDijual = '[href="/id/jual/tanah"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Dijual')
			.trigger('mouseover')
			.get(tanahDijual)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_JualTanah) => {
		expect(url_JualTanah).to.include('/jual/tanah');
		});
	});

	it('C2236	Dijual Ruko', function () {
		const rukoDijual = '[href="/id/jual/ruko"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Dijual')
			.trigger('mouseover')
			.get(rukoDijual)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_JualRuko) => {
			expect(url_JualRuko).to.include('/jual/ruko');
		});
	});

	it('C2237	Dijual Villa', function () {
		const vilaDijual = '[href="/id/jual/vila"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Dijual')
			.trigger('mouseover')
			.get(vilaDijual)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_JualVila) => {
			expect(url_JualVila).to.include('/jual/vila');
		});
	});

	it('C2238	Dijual Kostan', function () {
		const kostanDijual = '[href="/id/jual/kost"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Dijual')
			.trigger('mouseover')
			.get(kostanDijual)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_JualKost) => {
			expect(url_JualKost).to.include('/jual/kost');
		});
	});

	it('C2239	Disewa Rumah ', function () {
		const rumahDisewa = '[href="/id/sewa/rumah"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Disewa')
			.trigger('mouseover')
			.get(rumahDisewa)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_RumahDisewa) => {
			expect(url_RumahDisewa).to.be.include('/sewa/rumah');
		});
	});

	it('C2240	Disewa Apartemen ', function () {
		const apartemenDisewa = '[href="/id/sewa/apartemen"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Disewa')
			.trigger('mouseover')
			.get(apartemenDisewa)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_ApartemenDisewa) => {
			expect(url_ApartemenDisewa).to.be.include('/sewa/apartemen');
		});
	});

	it('C2241	Disewa Tanah', function () {
		const tanahDisewa = '[href="/id/sewa/tanah"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Disewa')
			.trigger('mouseover')
			.get(tanahDisewa)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_TanahDisewa) => {
			expect(url_TanahDisewa).to.be.include('/sewa/tanah');
		});
	});

	it('C2242	Disewa Ruko ', function () {
		const rukoDisewa = '[href="/id/sewa/ruko"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Disewa')
			.trigger('mouseover')
			.get(rukoDisewa)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_RukoDisewa) => {
			expect(url_RukoDisewa).to.be.include('/sewa/ruko');
		});
	});

	it('C2243	Disewa Villa ', function () {
		const vilaDisewa = '[href="/id/sewa/vila"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Disewa')
			.trigger('mouseover')
			.get(vilaDisewa)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_VilaDisewa) => {
			expect(url_VilaDisewa).to.be.include('/sewa/vila');
		});
	});

	it('C2244	Disewa Kostan  ', function () {
		const kostDisewa = '[href="/id/sewa/kost"]';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Disewa')
			.trigger('mouseover')
			.get(kostDisewa)
			.eq(1)
			.click({ force: true });
		cy.url().should((url_KostDisewa) => {
			expect(url_KostDisewa).to.be.include('/sewa/kost');
		});
	});

	it('C2245	Project Hunian Baru', function () {
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Projek Hunian Baru')
			.click();
		cy.url().should((url_PerumahanBaru) => {
			expect(url_PerumahanBaru).to.be.include('/projects');
		});
	});

	it('C2246	Berita Properti - Blog 99.co', function () {
		const dropdownMenu = '.mega-menu__item.text-left';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Berita Properti')
			.trigger('mouseover')
			.get(dropdownMenu)
			.contains('Blog 99.co')
			.click({ force: true });
		cy.url().should((url_blog) => {
			expect(url_blog).to.be.include('/blog');
		});
	});

	it('C2247	Berita Properti - Panduan', function () {
		const dropdownMenu = '.mega-menu__item.text-left';
		cy.get('.main-menu-dropdown.dropdown')
			.contains('Berita Properti')
			.trigger('mouseover')
			.get(dropdownMenu)
			.contains('Panduan')
			.click({ force: true });
		cy.url().should((url_panduan) => {
			expect(url_panduan).to.be.include('/panduan');
		});
	});

	it('C2248	Simulation KPR', function () {
		const kalkulator_kpr = '[href="/id/guide/mortgage/calculator"]';
		cy.get('.mega-menu__item.text-left')
			.find(kalkulator_kpr)
			.click({ force: true });
		cy.url().should((url_kalkulatorkpr) => {
			expect(url_kalkulatorkpr).to.be.include('/guide/mortgage/calculator');
		});
	});

	it('C2249	Ajukan KPR', function () {
		const ajukan_kpr = '[href="/id/guide/mortgage/form-mortgage"]';
		cy.get('.mega-menu__item.text-left')
			.find(ajukan_kpr)
			.click({ force: true });
		cy.url().should((url_ajukankpr) => {
			expect(url_ajukankpr).to.be.include('/guide/mortgage/form-mortgage');
		});
	});

	it('C2250	Cara Mengajukan KPR', function () {
		const cara_mengajukan_kpr = '[href="/id/panduan/ajukan-kpr-online"]';
		cy.get('.mega-menu__item.text-left')
			.find(cara_mengajukan_kpr)
			.click({ force: true });
		cy.url().should((url_caraajukankpr) => {
			expect(url_caraajukankpr).to.be.include('/panduan/ajukan-kpr-online');
		});
	});
});
