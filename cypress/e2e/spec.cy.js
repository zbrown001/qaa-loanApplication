import { faker } from '@faker-js/faker'


describe('Automation Test Suite - Fixtures', function () {

  // Get Parameters
  before(function () {
    cy.fixture('example.json').then(function (data) {
      this.data = data;
    })
  })

  it('Cypress Test Case - Understanding Fixtures', function () {
    
    // Faker Variables
    const emailDigits = faker.random.numeric(8);

    // Go to application
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.reload()
    cy.visit(this.data.application);

    

    cy.xpath('//a[@data-qaa="loginGetStarted"]').click()
    cy.xpath('//a[normalize-space()="Create Account"]').click()
    cy.xpath('//input[@placeholder="yours@example.com"]').type('test-'+emailDigits+'@nanolos.com')
    cy.xpath('//input[@placeholder="your password"]').type('Password!11')
    cy.xpath('//span[@class="auth0-label-submit"]').click()
  })
})