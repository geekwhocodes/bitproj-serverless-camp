describe('Testing the CatzAPP', () => {
    it('Testing Week 4 Step 7', () => {
        cy.visit('CatzAPP/index.html')
        cy.get('input[id="name1"]').type('cat1')
        cy.get('input[id="name2"]').type('cat2') 
        cy.get('input[id="name3"]').type('cat3') 
        cy.get('input[id="name4"]').type('cat4')  
        cy.get('input[type="button"]').click()
        cy.get('img[id="image1"]').should('have.attr', 'src').should('include','data:image/png;base64,')
        cy.get('img[id="image2"]').should('have.attr', 'src').should('include','data:image/png;base64,')
        cy.get('img[id="image3"]').should('have.attr', 'src').should('include','data:image/png;base64,')
        cy.get('img[id="image4"]').should('have.attr', 'src').should('include','data:image/png;base64,')
    })
})