Feature: Test


  Scenario: Login
    Login to website.
    Given user logs in with Bob as username and TrialTest as password
    When username and password are correct
    Then user should be logged in

  Scenario: Sign Up
    Login to website.
    Given user register with informations as
      | Your Name | Your Email | username | Password |
      | Bob Ay | test@email.com | Bob | TestPassword |
    When email is correct, username is available, and password is sufficient
    Then user registration is done

  Scenario: Chartbit
    Given user is not pro user
    When user open Chartbit
    Then Chartbit is not available

  Scenario: Search a Stock
    Given the user is on the homepage
    When the user search for "ANTM"
    Then the "ANTM" stock page should display

  Scenario: Add to Watchlist
    Given two scenarios
      """
      Scenario: Add stock from its stock page
      Given the user is on the "ANTM" stock page
      When the user clicks on follow button
      Then Save to watchlist box appears
      And click plus button to save "ANTM" to list

      Scenario: Add stock from watchlist page
      Given the user is on watchlist page
      When the user searches for "ANTM"
      And the user presses enter key
      Then "ANTM" is added to current watchlist
      """

  Scenario: Remove from Watchlist
    Given the user is on watchlist page and the list of stocks
    When the user clicks on X button on one stock on the list
    And the user confirms to delete
    Then the stock is deleted from list
