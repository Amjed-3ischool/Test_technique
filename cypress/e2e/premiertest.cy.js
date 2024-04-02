describe ('test technique',()=>{
    beforeEach(()=>{
        cy.visit('https://magento.softwaretestingboard.com/')
    })

it('Création de compte',()=>{
    cy.contains('Sign In').click()
    cy.contains('Create an Account').click()
    cy.get('#firstname').type('lundi')
    cy.get('#lastname').type('user_072348')
    cy.get('#email_address').type('lundi.user_072348@yopmail.com')
    cy.get('#password').type('123vivaalgerie+')
    cy.get('#password-confirmation').type('123vivaalgerie+')
    cy.contains('Create an Account').click()
    cy.wait(3000)
    cy.screenshot()
})

it('home page',()=>{
    //cy.get('.panel wrapper').should('be.visible')
    cy.get('.logo').should('be.visible')
    cy.contains('Women').click()
   // cy.get('.footer content').should('be.visible')
    cy.screenshot()
    
})

it('catalogue + tunnel d achat',()=>{
    cy.contains('Radiant Tee').click()
    cy.wait(5000)
    cy.get('#option-label-size-143-item-167').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.contains('Add to Cart').click()
    cy.wait(5000)
    cy.get('.counter-number').click()
    cy.get('#top-cart-btn-checkout').click()
    cy.wait(15000)
    cy.get('[name="street[0]"]').type('112 allée de notre dame des anges')
    cy.get('[name="city"]').type('Montfermeil')
    cy.wait(5000)
    cy.get('[name="country_id"]').select('France')
    cy.get('[name="region_id"]').select('Seine-Saint-Denis')
    cy.get('[name="postcode"]').type(93370)
    cy.get('[name="telephone"]').type('0655223399')
    //cy.get('[name="ko_unique_1]').click()
    cy.contains('Next').click()
    cy.get('.billing-address-details').should('be.visible')
    cy.get('.opc-block-summary').should('be.visible')
    cy.contains('Place Order').click()
    cy.wait(5000)
    cy.get('.base').should('be.visible')
    cy.get('.checkout-success').should('be.visible')
    cy.get('.action switch').click()
    cy.contains('Sign Out').click()
    cy.screenshot()

})
})

