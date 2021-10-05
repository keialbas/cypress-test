/// <reference types="cypress" />

describe('Our First Test', () =>{
    beforeEach(() =>{

        cy.visit('/')

    })
    it('Click the toogle button', () =>{
        
        cy.contains('.menu-title','Layout').click()
        cy.contains('.menu-title','Accordion').click()
        cy.get('.appearance-filled.size-medium').click()
        cy.get('nb-accordion-item')
        .should('have.class', 'expanded')
    })

    it('Fill Form', () =>{
        cy.contains('.menu-title','Forms').click()
        cy.contains('.menu-title','Form Layout').click()
        
        //cy.get('[data-cy="imputEmail1"]').type('hola@gmail.com')
        //cy.get('.col-sm-9 > input[type="password"]#inputPassword2').type('abcd1234')
        //cy.get('.text')
        //.contains('Option 1')
        //.siblings('input[type="radio"]')
        //.check({force: true})
        //.should("be.checked")

        cy.contains('nb-card', 'Using the Grid')
        .find('#inputEmail1').type("hola@gmail.com")
        .parents('nb-card')
        .find('#inputPassword2').type("1234")
        .parents('nb-card')
        .find('span')
        .contains('Option 2')
        .siblings('input[type="radio"]')
        .check({force: true})

    })


})