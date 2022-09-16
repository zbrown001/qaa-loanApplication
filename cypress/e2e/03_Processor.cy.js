// npx cypress run --record --key b44d18cc-21e5-45ae-8acb-88b350ec5a27
// npx cypress run --browser chrome --headed --spec cypress/e2e/LoanOfficer/demoLO.cy.js
// npx cypress run --browser chrome --spec cypress/e2e/LoanOfficer/demoLO.cy.js

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
    
    // Go to Flux Demo
    cy.visit(this.data.a

    // Click Get Started
    cy.xpath('//a[normalize-space()="Get Started"]').click()

    // Enter Email Address
    cy.xpath('//input[@id="username"]').type(this.data.DemoProcessingEmail)

    // Enter Password
    cy.xpath('//input[@id="password"]').type(this.data.Password)

    // Click Continue (login)
    cy.xpath('//button[@name="action"]').click()

    // Wait for Nano LOS to load...
    cy.xpath('//h2[normalize-space()="Search"]', { timeout: 60000 }).click()
    
  })
})