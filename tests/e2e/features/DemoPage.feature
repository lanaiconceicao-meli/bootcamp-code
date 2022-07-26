@mobile @desktop
Feature: Demo page
  As a user on the Demo page
  I want to be sure that all works as expected

  Background:
    Given A page with URL '/demo'
    And Page structure is loaded

  @OnlyChrome
  Scenario: Show the Demo page content
    Then Page should have a 'Demo Page' title

  Scenario: Counter increment functionality
    When Click on '.demo-button__add'
    Then Ensure that '.demo-counter' contains the text 'Clicks counter: 1'

  Scenario: Counter decrement functionality
    When Click on '.demo-button__subtract'
    Then Ensure that '.demo-counter' contains the text 'Clicks counter: -1'
