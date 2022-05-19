const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
).set;

describe('Msite Filter Condition (SRP)', function() {

  beforeEach(function() {
    cy.viewport('iphone-x').visit('/');
    cy.intercept('POST','/api/property/find-by-filter-simple').as('LoadFilterResult')
  });

  it('As a User, i want to filter SRP by kategori Dijual', function () {
    cy.openFilterSRP()
    cy.FilterbyKategori()
    cy.get('.ui-organisms-mobile-dsearch-filter__option')
      .find('.relative').eq(0).contains('Dijual').click()
    cy.get('.ui-molecules-radio__label').eq(0).click({force:true})
    cy.SubmitFilter()
    cy.wait('@LoadFilterResult')
      .its('response.statusCode').should('equal', 200)
    cy.url().should('include', 'jual/rumah/')
  });

  it('As a User, i want to filter SRP by kategori Disewa', function () {
    cy.openFilterSRP()
    cy.FilterbyKategori()
    cy.get('.ui-organisms-mobile-dsearch-filter__option')
      .find('.relative').eq(1).contains('Disewa').click()
    cy.get('.ui-molecules-radio__label').eq(1).click({force:true})
    cy.SubmitFilter()
    cy.wait('@LoadFilterResult')
      .its('response.statusCode').should('equal', 200)
    cy.url().should('include', 'sewa/rumah/')
  });

  it('As a User, i want to filter SRP by each Condition/Kondisi Properti', function () {
    const kondisi = ['Semua', 'Baru', 'Seken']
    const url = ['jual/rumah/', 'perumahan-baru/residensial/', '?subChannel=subsale']
    cy.openFilterSRP()
    for (let i = 0; i<kondisi.length && url.length; i++){
      cy.FilterbyKondisi()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i]).contains(kondisi[i]).click()
      cy.SubmitFilter()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', url[i])
      cy.ResetFilterResults()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
    }
  });

  it('As a User, i want to filter SRP by each Type/Tipe Properti', function () {
    const tipe = ['Residensial', 'Rumah', 'Apartemen', 'Ruko', 'Tanah', 'Pabrik', 'Kantor', 'Gudang', 'Ruang-usaha']
    cy.openFilterSRP()
    for (let i = 0; i<tipe.length; i++){
      cy.FilterbyTipe()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i]).contains(tipe[i]).click()
      cy.SubmitFilter()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', 'jual/'+tipe[i].toLowerCase())
      cy.ResetFilterResults()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
    }
  });

  it('As a User, i want to filter SRP by certain amount of Minimum Price', function () {
    const minPrice = ['50Jt', '100Jt', '200Jt', '300Jt', '400Jt', '500Jt', '600Jt', '700Jt', '800Jt', '900Jt', '1M']
    const nominal = [50000000, 100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000]
    cy.openFilterSRP()
    for (let i = 0; i<minPrice.length; i++){
      cy.FilterbyMinimumPrice()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(minPrice[i]).click({force:true})
      cy.SubmitFilter()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?minPrice='+nominal[i])
      cy.ResetFilterResults()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
    }
  });

  it('As a User, i want to filter SRP by certain amount of Maximum Price', function () {
    const maxPrice = ['50Jt', '100Jt', '200Jt', '300Jt', '400Jt', '500Jt', '600Jt', '700Jt', '800Jt', '900Jt', '1M']
    const nominal = [50000000, 100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000]
    cy.openFilterSRP()
    for (let i = maxPrice.length - 1 && nominal.length - 1; i >= 0; i--){
      cy.FilterbyMaximumPrice()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(maxPrice[i]).click({force:true})
      cy.SubmitFilter()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?maxPrice='+nominal[i])
      cy.ResetFilterResults()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
    }
  });

  it('As a User, i want to filter SRP by certain Luas Tanah and Luas Bangunan', function () {
    const luasTanah = [100, 200]
    const luasBangunan = [200, 400]
    cy.openFilterSRP()
    cy.get('.ui-organism-mobile-search-filter__filter-column').click()
    for(let i=0; i<luasTanah.length; i++){
      cy.get('input[type="range"]').eq(i).then(($slider) => {
        const slider = $slider[0];
        nativeInputValueSetter.call(slider, luasTanah[i])
        slider.dispatchEvent(
          new Event('change', { value: luasTanah[i], bubbles: true })
        )
      })
    }
    cy.get('.ui-organisms-mobile-range-filter__input > p')
      .eq(0).should('have.text', luasTanah[0]+'m² - '+luasTanah[1]+'m²')
    for(let i=0; i<luasBangunan.length; i++){
      cy.get('input[type="range"]').eq(i+2).then(($slider) => {
        const slider = $slider[0];
        nativeInputValueSetter.call(slider, luasBangunan[i])
        slider.dispatchEvent(
          new Event('change', { value: luasBangunan[i], bubbles: true })
        )
      })
    }
    cy.get('.ui-organisms-mobile-range-filter__input > p')
      .eq(1).should('have.text', luasBangunan[0]+'m² - '+luasBangunan[1]+'m²')
    cy.SubmitFilter()
    cy.wait('@LoadFilterResult')
      .its('response.statusCode').should('equal', 200)
    cy.url()
      .should('include', 'minBuiltupSize='+luasBangunan[0],'&maxBuiltupSize='+luasBangunan[1],
              '&minLandArea='+luasTanah[0],'&maxLandArea='+luasTanah[1])
  });

  it('As a User, i want to filter SRP by amount of Kamar Tidur', function () {
    const jumlahKT = ['1+', '2+', '3+', '4+']
    cy.openFilterSRP()
    for (let i = 0; i<jumlahKT.length; i++){
      cy.FilterbyKamarTidur()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlahKT[i]).click()
      cy.SubmitFilter()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?bedroom='+[i+1])
      cy.ResetFilterResults()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
    }
  });

  it('As a User, i want to filter SRP by amount of Kamar Mandi', function () {
    const jumlahKM = ['1+', '2+', '3+', '4+']
    cy.openFilterSRP()
    for (let i = 0; i<jumlahKM.length; i++){
      cy.FilterbyKamarMandi()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlahKM[i]).click()
      cy.SubmitFilter()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?bathroom='+[i+1])
      cy.ResetFilterResults()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
    }
  });

  it('As a User, i want to filter SRP by amount of Kamar Tidur and Kamar Mandi', function () {
    const jumlah = ['1+', '2+', '3+', '4+']
    cy.openFilterSRP()
    for (let i = 0; i<jumlah.length; i++){
      cy.FilterbyKamarTidur()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlah[i]).click()
      cy.get(':nth-child(11) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlah[i]).click()
      cy.SubmitFilter()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?bedroom='+[i+1],'&bathroom='+[i+1])
      cy.ResetFilterResults()
      cy.wait('@LoadFilterResult')
        .its('response.statusCode').should('equal', 200)
    }
  });
});
