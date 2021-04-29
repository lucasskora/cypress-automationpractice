const homePage=require('../pageObjects/homePage.json')
const loginPage=require('../pageObjects/loginPage.json')
const loginData=require('../fixtures/login.json')


   Cypress.Commands.add('login', () => {
           
        cy.visit('http://automationpractice.com/index.php')
        cy.get(homePage.signInButton).click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get(loginPage.login.emailText).type(loginData.email)
        cy.get(loginPage.login.passwordText).type(loginData.password)
        cy.get(loginPage.login.submitButton).click()

        cy.get('#center_column > :nth-child(2)').should('contain', 'Authentication failed')

        cy.get('.icon-home').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php')

        })