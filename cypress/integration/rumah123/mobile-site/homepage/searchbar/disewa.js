const elementParent = '.ui-molecules-dialog-location-r123__text > p';

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
).set;

describe('Msite Searchbar Disewa', function() {
  beforeEach(function() {
    cy.viewport('iphone-x').visit('/');
    cy.intercept('POST','/api/property/find-by-filter-simple').as('LoadSearchResult')
    //cy.intercept('POST','/api/location-suggestion/search-parser').as('LoadSearchResult')
  });

  it('C2219 As a Consumer (buyer), i want to search listing "disewa" ', function() {
    const keyword = "Bandung"

    cy.openDisewaSRP()
    cy.SearchLocation(keyword)
    cy.CheckLocationSuggestion({
      index: 0,
      selector: elementParent,
      value: keyword
    })
    cy.get('.fixed > .relative > .ui-atomic-button').click()
    cy.wait('@LoadSearchResult')
      .its('response.statusCode').should('equal', 200)
    cy.url().should('include', 'sewa/'+keyword.toLowerCase()+'/rumah')
  });

  it('C2222~C2229 As a Consumer (buyer), i want to filter SRP Disewa by apartment/.../ruang usaha', function() {
    const tipe = ['Residensial', 'Rumah', 'Apartemen', 'Ruko', 'Tanah', 'Pabrik', 'Kantor', 'Gudang', 'Ruang-usaha']
    cy.openDisewaSRP()
    for (let i = 0; i<tipe.length; i++){
      cy.FilterDisewabyTipe()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i]).contains(tipe[i]).click()
      cy.SubmitFilterDisewa()
      cy.wait('@LoadSearchResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', 'sewa/'+tipe[i].toLowerCase())
    }
  });

  it('C2230 As a Consumer (buyer), i want to filter SRP Disewa by harga min', function() {
    const minPrice = ['50Jt', '100Jt', '200Jt', '300Jt', '400Jt', '500Jt', '600Jt', '700Jt', '800Jt', '900Jt', '1M']
    const nominal = [50000000, 100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000]
    cy.openDisewaSRP()
    for (let i = 0; i<minPrice.length; i++){
      cy.FilterDisewabyMinimumPrice()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(minPrice[i]).click({force:true})
      cy.SubmitFilterDisewa()
      cy.wait('@LoadSearchResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?minPrice='+nominal[i]).go('back')
    }
  });

  it('C2231 As a Consumer (buyer), i want to filter SRP Disewa by harga max', function() {
    const maxPrice = ['50Jt', '100Jt', '200Jt', '300Jt', '400Jt', '500Jt', '600Jt', '700Jt', '800Jt', '900Jt', '1M']
    const nominal = [50000000, 100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000]
    cy.openDisewaSRP()
    for (let i = maxPrice.length - 1 && nominal.length - 1; i >= 0; i--){
      cy.FilterDisewabyMaximumPrice()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(maxPrice[i]).click({force:true})
      cy.SubmitFilterDisewa()
      cy.wait('@LoadSearchResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?maxPrice='+nominal[i]).go('back')
    }
  });

  it('C2232 As a User, i want to filter SRP Disewa by Luas Tanah', function() {
    const luasTanah = [100, 200]
    cy.openDisewaSRP()
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
    cy.SubmitFilterDisewa()
    cy.wait('@LoadSearchResult')
      .its('response.statusCode').should('equal', 200)
    cy.url()
      .should('include', 'minLandArea='+luasTanah[0],'&maxLandArea='+luasTanah[1])
  });

  it('C57014 As a User, i want to filter SRP Disewa by Luas Bangunan', function() {
    const luasBangunan = [200, 400]
    cy.openDisewaSRP()
    cy.get('.ui-organism-mobile-search-filter__filter-column').click()
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
    cy.SubmitFilterDisewa()
    cy.wait('@LoadSearchResult')
      .its('response.statusCode').should('equal', 200)
    cy.url()
      .should('include', 'minBuiltupSize='+luasBangunan[0],'&maxBuiltupSize='+luasBangunan[1])
  });

  it('C57015 As a User, i want to filter SRP Disewa by Luas Tanah and Luas Bangunan', function() {
    const luasTanah = [100, 200]
    const luasBangunan = [200, 400]
    cy.openDisewaSRP()
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
    cy.SubmitFilterDisewa()
    cy.wait('@LoadSearchResult')
      .its('response.statusCode').should('equal', 200)
    cy.url()
      .should('include', 'minBuiltupSize='+luasBangunan[0],'&maxBuiltupSize='+luasBangunan[1],
              '&minLandArea='+luasTanah[0],'&maxLandArea='+luasTanah[1])
  });

  it('C57016 As a User, i want to filter SRP Disewa by amount of Kamar Tidur', function() {
    const jumlahKT = ['1+', '2+', '3+', '4+']
    cy.openDisewaSRP()
    for (let i = 0; i<jumlahKT.length; i++){
      cy.FilterDisewabyKamarTidur()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlahKT[i]).click()
      cy.SubmitFilterDisewa()
      cy.wait('@LoadSearchResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?bedroom='+[i+1]).go('back')
    }
  });

  it('C57017 As a User, i want to filter SRP Disewa by amount of Kamar Mandi', function() {
    const jumlahKM = ['1+', '2+', '3+', '4+']
    cy.openDisewaSRP()
    for (let i = 0; i<jumlahKM.length; i++){
      cy.FilterDisewabyKamarMandi()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlahKM[i]).click()
      cy.SubmitFilterDisewa()
      cy.wait('@LoadSearchResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?bathroom='+[i+1]).go('back')
    }
  });

  it('C57018 As a User, i want to filter SRP Disewa by amount of Kamar Tidur and Kamar Mandi', function() {
    const jumlah = ['1+', '2+', '3+', '4+']
    cy.openDisewaSRP()
    for (let i = 0; i<jumlah.length; i++){
      cy.FilterDisewabyKamarTidur()
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlah[i]).click()
      cy.get(':nth-child(9) > .ui-organisms-mobile-dsearch-filter__filter-filed > .flex').click({force:true})
      cy.get('.ui-organisms-mobile-dsearch-filter__option')
        .find('.relative').eq([i+1]).contains(jumlah[i]).click()
      cy.SubmitFilterDisewa()
      cy.wait('@LoadSearchResult')
        .its('response.statusCode').should('equal', 200)
      cy.url().should('include', '?bedroom='+[i+1],'&bathroom='+[i+1]).go('back')
    }
  });
});