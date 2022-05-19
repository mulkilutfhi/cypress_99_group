import _ from 'lodash';

Cypress.Commands.add('checkGA', (gtm) => {
    return cy.window().then(win => {

        let result = '';
        _.forOwn(gtm, function(value, key) {
            if (!_.isEmpty(value) && !_.isArray(value))
                result += key + ' = ' + value + ', ';
            else 
                result += key + ', ';
        });
        result = result.slice(0, -2);

console.log(win.dataLayer)
console.log(gtm)

        if (_.some(win.dataLayer, gtm)) {
            expect(result).to.eq(result);
        } else {
            expect(result).to.eq('Not Found in dataLayer');
        }
      });
});
