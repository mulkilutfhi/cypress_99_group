describe('Blog Section', () => {
  let data;

  before(function () {
    cy.viewport('macbook-15').visit('/');
    cy.fixture('dijual/url-dijual').then((url) => {
      data = url;
    });
  });

  it('C67789 blog article section must be visible', () => {
    cy.checkElement({ element: 'hp-blog-card' });
  });

  it('C67790 blog article section must to have title', () => {
    cy.checkElement({ element: 'hp-blog-title' });

    cy.getElement('hp-blog-title').then((object) => {
      const txt = object.text();

      expect(txt).to.be.eq('Info Properti');
    });
  });

  it('C67791 blog article section must to have picture', () => {
    cy.checkElement({ element: 'hp-blog-image' });
  });

  it('C67792 blog article section must to have description', () => {
    cy.checkElement({ element: 'hp-blog-description-section' });
  });

  it('C67793 click one of blog article, url should be suitable', () => {
    cy.getElement('hp-blog-card').eq(0).find('a').should('have.attr', 'href');
  });
});
