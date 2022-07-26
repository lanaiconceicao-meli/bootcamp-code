@desktop
Feature: Logged In User
  An example usage of test with authenticated users
  Warning: this scenario has strictly a demonstrating purpose, please use the real cases in your tests

  Scenario: Open a page and look for the rendered username
    Given A logged user which session names is 'ghy-user-1000001' on a page with URL '/demo'
    And Page structure is loaded
    Then Ensure that '.nav-header-username' contains the text 'Test KYC'
