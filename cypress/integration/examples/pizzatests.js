describe('Pizza Form', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('sanity checks', () => {
        expect(1).to.eql(1)
    })

    const formInput = (name) => cy.get(`input[name=${name}]`)
    const button = (id) => cy.get(`button[id=${id}]`)

    it('ensuring home order button works', () => {
        button('orderBtn').click()
    })

    it('quick form functionality', () => {
        button('orderBtn').click()
        button('submitBtn').should('be.disabled')
        formInput('name').type('Bob')
        cy.get('select').select('small')
        button('submitBtn').should('be.enabled').click()

    })
})