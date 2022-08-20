package com.example;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;

public class StepDefinitions {
    public Actionwords actionwords = new Actionwords();


    @Given("two scenarios")
    public void twoScenarios(String freeText) {
        actionwords.twoScenarios(freeText);
    }

    @Then("user should be logged in")
    public void userShouldBeLoggedIn() {
        actionwords.userShouldBeLoggedIn();
    }

    @Given("the user is on the homepage")
    public void theUserIsOnTheHomepage() {
        actionwords.theUserIsOnTheHomepage();
    }

    @Given("user logs in with Bob as username and TrialTest as password")
    public void userLogsInWithBobAsUsernameAndTrialTestAsPassword() {
        actionwords.userLogsInWithBobAsUsernameAndTrialTestAsPassword();
    }

    @When("username and password are correct")
    public void usernameAndPasswordAreCorrect() {
        actionwords.usernameAndPasswordAreCorrect();
    }

    @Given("user register with informations as")
    public void userRegisterWithInformationsAs(DataTable datatable) {
        actionwords.userRegisterWithInformationsAs(datatable);
    }

    @Given("user is not pro user")
    public void userIsNotProUser() {
        actionwords.userIsNotProUser();
    }

    @When("user open Chartbit")
    public void userOpenChartbit() {
        actionwords.userOpenChartbit();
    }

    @Then("Chartbit is not available")
    public void chartbitIsNotAvailable() {
        actionwords.chartbitIsNotAvailable();
    }

    @When("the user search for {string}")
    public void theUserSearchForP1(String p1) {
        actionwords.theUserSearchForP1(p1);
    }

    @Then("the {string} stock page should display")
    public void theP1StockPageShouldDisplay(String p1) {
        actionwords.theP1StockPageShouldDisplay(p1);
    }

    @Given("the user is on watchlist page and the list of stocks")
    public void theUserIsOnWatchlistPageAndTheListOfStocks() {
        actionwords.theUserIsOnWatchlistPageAndTheListOfStocks();
    }

    @When("the user clicks on X button on one stock on the list")
    public void theUserClicksOnXButtonOnOneStockOnTheList() {
        actionwords.theUserClicksOnXButtonOnOneStockOnTheList();
    }

    @When("the user confirms to delete")
    public void theUserConfirmsToDelete() {
        actionwords.theUserConfirmsToDelete();
    }

    @Then("the stock is deleted from list")
    public void theStockIsDeletedFromList() {
        actionwords.theStockIsDeletedFromList();
    }

    @When("email is correct, username is available, and password is sufficient")
    public void emailIsCorrectUsernameIsAvailableAndPasswordIsSufficient() {
        actionwords.emailIsCorrectUsernameIsAvailableAndPasswordIsSufficient();
    }

    @Then("user registration is done")
    public void userRegistrationIsDone() {
        actionwords.userRegistrationIsDone();
    }
}