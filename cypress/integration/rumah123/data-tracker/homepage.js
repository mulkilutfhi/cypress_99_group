describe("Homepage Data Tracker", () => {

	beforeEach(() => {
		cy.viewport('macbook-15');
		cy.visit('/');
	});

	it('Page Load', { tags: ['smoke'] }, () => {
		cy.checkGA({
			"event": "pageview",
			"source": "HP",
			"userInfo": {}
		});
	});

	it('Show Hot Properties', { tags: ['smoke'] }, () => {
		cy.checkGA({
			"event": "listingHot",
			"source": "HP-Hot Properties",
			"user": {}
		});
	});

	it('Show Popular Properties', { tags: ['smoke'] }, () => {
		cy.checkGA({
			"event": "listingHot",
			"source": "HP-Popular Properties",
			"user": {}
		});
	});

	it('Show New Launch Properties', () => {
		cy.checkGA({
			"event": "listingHot",
			"source": "HP-New Launch",
			"user": {}
		});
	});

	it('Interaction on Hot Properties Carousel', () => {
		cy.intercept({
			method : 'GET',
			url : 'http://new-api.rumah123.com/homepage/v1/new-properties-1'
		}, {
				body: {
					"code": 200,
					"message": "OK",
					"data": [
				{
					"image": "https://d3p0bla3numw14.cloudfront.net/images/homepage_advertisement_v2/2410/1625061171_60dc773312924img.jpg",
					"image_path": "/images/homepage_advertisement_v2/2410/1625061171_60dc773312924img.jpg",
					"ads_id": "nps2410",
					"is_paid": 1,
					"tagline": "Pakuwon Residences Bekasi",
					"district_name": "Jaka Setia",
					"city_name": "Bekasi",
					"province_name": "Jawa Barat",
					"list_images": [
							"https://d3p0bla3numw14.cloudfront.net/primary_property/project/2410/1618818499_607d35c332f23ads_images_2410.jpg",
					],
					"list_images_path": [
							"primary_property/project/2410/1618818499_607d35c332f23ads_images_2410.jpg",
					],
					"location": "Jaka Setia, Bekasi",
					"url": "https://www.rumah123.com/properti/bekasi/pakuwon-residences-bekasi/2410",
					"logo": [
							"https://d3p0bla3numw14.cloudfront.net/primary_property/project/2410/1618817934_607d338e88a14ads_logo_2410.jpg"
					],
					"logo_path": [
							"/primary_property/project/2410/1618817934_607d338e88a14ads_logo_2410.jpg"
					],
					"project_name": "Pakuwon Residences Bekasi",
					"price_min": 675000000,
					"price_max": 1300000000,
					"developer_id": 1240,
					"developer_name": "Pakuwon Jati Tbk (Pt. Grama Pramesi Siddhi)",
					"label": {
							"status": "",
							"new": "Baru",
							"featured": "Featured"
					},
					"landArea": "",
					"builtUp": "Dari 25,50 - 54"
				},
				{
					"image": "https://d3p0bla3numw14.cloudfront.net/images/homepage_advertisement_v2/2635/1625546097_60e3dd711da32img.jpg",
					"image_path": "/images/homepage_advertisement_v2/2635/1625546097_60e3dd711da32img.jpg",
					"ads_id": "nps2635",
					"is_paid": 3,
					"tagline": "Kraton Residence",
					"district_name": "Cikarang",
					"city_name": "Bekasi",
					"province_name": "Jawa Barat",
					"list_images": [
							"https://d3p0bla3numw14.cloudfront.net/primary_property/project/2635/1624337450_60d16c2ab5627ads_images_2635.jpg",
					],
					"list_images_path": [
							"primary_property/project/2635/1624337450_60d16c2ab5627ads_images_2635.jpg",
					],
					"location": "Cikarang, Bekasi",
					"url": "https://www.rumah123.com/properti/bekasi/kraton-residence/2635",
					"logo": [
							"https://d3p0bla3numw14.cloudfront.net/primary_property/project/2635/1624337375_60d16bdfc07f3ads_logo_2635.jpg"
					],
					"logo_path": [
							"/primary_property/project/2635/1624337375_60d16bdfc07f3ads_logo_2635.jpg"
					],
					"project_name": "Kraton Residence",
					"price_min": 1200000000,
					"price_max": 2900000000,
					"developer_id": 973,
					"developer_name": "Jababeka Residence",
					"label": {
							"status": "",
							"new": "Baru",
							"featured": "Premier"
					},
					"landArea": "Dari 84 - 192",
					"builtUp": "Dari 58 - 167"
				},
				{
					"image": "https://d3p0bla3numw14.cloudfront.net/images/homepage_advertisement_v2/2635/1625546097_60e3dd711da32img.jpg",
					"image_path": "/images/homepage_advertisement_v2/2635/1625546097_60e3dd711da32img.jpg",
					"ads_id": "nps2635",
					"is_paid": 3,
					"tagline": "Kraton Residence",
					"district_name": "Cikarang",
					"city_name": "Bekasi",
					"province_name": "Jawa Barat",
					"list_images": [
							"https://d3p0bla3numw14.cloudfront.net/primary_property/project/2635/1624337450_60d16c2ab5627ads_images_2635.jpg",
					],
					"list_images_path": [
							"primary_property/project/2635/1624337450_60d16c2ab5627ads_images_2635.jpg",
					],
					"location": "Cikarang, Bekasi",
					"url": "https://www.rumah123.com/properti/bekasi/kraton-residence/2635",
					"logo": [
							"https://d3p0bla3numw14.cloudfront.net/primary_property/project/2635/1624337375_60d16bdfc07f3ads_logo_2635.jpg"
					],
					"logo_path": [
							"/primary_property/project/2635/1624337375_60d16bdfc07f3ads_logo_2635.jpg"
					],
					"project_name": "Kraton Residence",
					"price_min": 1200000000,
					"price_max": 2900000000,
					"developer_id": 973,
					"developer_name": "Jababeka Residence",
					"label": {
							"status": "",
							"new": "Baru",
							"featured": "Premier"
					},
					"landArea": "Dari 84 - 192",
					"builtUp": "Dari 58 - 167"
				}
					]
				}
		})
		cy.checkGA({
			"event": "listingCarousel",
			"source": "HP-Hot Properties",
			"listing": {},
			"user": {}
		});
	});

	it('Click on Hot Properties Link', () => {
		cy.get('.ui-home-page__featured-property__content > .ui-home-page__featured-property__card:first-child', {timeout: 20000}).trigger('click')
		cy.checkGA({
			"event": "listingClick",
			"source": "HP-Hot Properties",
			"user": {},
			"listing": {}
		});
	});

	it('Click on Popular Properties Link', () => {
		cy.get('.ui-home-page__popular-listing__content > .ui-home-page__popular-listing__content__card:first-child', {timeout: 20000}).trigger('click')
		cy.checkGA({
			"event": "listingClick",
			"source": "HP-Popular Properties",
			"user": {},
			"listing": {}
		});
	});

	it('Click on New Launch Properties Link', () => {
		cy.get('.ui-home-page__new-property__content > .ui-molecules-card-carousel-r123 > .ui-molecules-card-carousel-r123__content--item:first-child', {timeout: 20000}).trigger('click')
		cy.checkGA({
			"event": "listingClick",
			"source": "HP-New Launch",
			"user": {},
			"listing": {}
		});
	});

	it('Click on Featured Article', () => {
		cy.get('.ui-home-page__article__content > .ui-home-page__article__content__card:first-child', {timeout: 20000}).as('articleCard')
		cy.get('@articleCard').trigger('click')
		cy.get('@articleCard').find('a').invoke("prop","href").then(($href) => {
			cy.checkGA({
				"event": "navigationInternal",
				"source": "HP-Featured Article",
				"user": {},
				"target": $href });
		});
	});

	it('Submit Search', ()=> {
		cy.get("div.search-btn > button").click({
			commandKey: true,
			ctrlKey: true
		});
		cy.wait(10000)
		cy.checkGA({
			"event": "listingSearch",
			"source": "HP-Search",
			"listingSearch": {},
			"user": {}
		});
	});
});
