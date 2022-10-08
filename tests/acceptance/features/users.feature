Feature: users
  As a user
  I want to view a list of users
  So that I can understand who is using the application

  Scenario: Get a list of users
    Given a user has navigated to the users page
    When the user clicks the "Users" link
    Then the name "John Doe" should be displayed