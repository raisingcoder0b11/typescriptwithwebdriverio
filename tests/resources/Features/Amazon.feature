Feature: Amazon Product Search and Tech Specification

  Scenario: Searching for a laptop on Amazon
    Given I am on Amazon India website
    When I type "laptop" in the search bar and press enter
    When I check the first checkbox under brand filter
    When I check the second checkbox under brand filter
    When I apply 3 star rating and hit enter
    When I select the first result
    Then I handle the newly opened result window and perform scroll and print the tech specification
