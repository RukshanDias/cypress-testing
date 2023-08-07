# Cypress

## Key benifits:
- Fast setup
- Fast execution
- easy to debug
- Unit, intergration, E2E tests
- Amazing GUI
- framework doesn't matter

## setting up project
- installing Cypress (npm i cypress)
- opening cypress (npx cypress open)
- setup in cypress.json (baseUrl, ignoreFiles, ...)
- write tests in integration folder (in .js file)
- can declare custom functions in 'support/commands.js'

## writing common tests
- mention "/// <reference types="cypress"/>" on top of the file
- start writing under 'describe' or 'context' <- container
- beforeEach() - for every setup before test execution

### Locating elements (Get, Contains, Find)  -  [View Code](cypress/integration/locators.spec.js)
- Get command locate every elements.
- Contains command locate first element met.
- find command have to use with parent -> cy.get(..).find(..)
- can also create cust func. calling get/contains/find inside that.