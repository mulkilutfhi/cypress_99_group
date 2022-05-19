export const postLogin = (inputId,inputPassword) => {
    cy.request({
        method: 'POST',
        url: 'https://stg.new-api.rumah123.com/oauth/v1/login/mobile',
        headers: {
            'Content-Type': Cypress.env('contentType'),
            'X-Client-Type': Cypress.env('xClientType'),
            'Authorization': Cypress.env('authorization')
        },
		form: true, 
		body: {
			username: inputId,
			password: inputPassword,
			grant_type: 'password'
		},
		failOnStatusCode: false
	})
};