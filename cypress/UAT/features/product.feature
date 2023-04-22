Feature: To validate Souled Store

    Scenario: Validate product visibilty in the men's page

        Given open the browser and navigate to the men's page
        When Navigate to T-shirts section
        Then All the items should be visible

    Scenario: Validate the poster
        Given open the browser and navigate to the items page
        Then Poster should be visible

    Scenario: Validate the product page
        Given open the browser and navigate to the items page
        When Click on the product
        Then The product should be clicked

    Scenario: Validate the product page details
        Given Open the browser and enter the url of product page
        Then Product page should be visible with all details

    Scenario: Validate the Image of the product
        Given Open the browser and enter the url of product page
        Then Product Image should be visible

    Scenario: Validate the name of product
        Given Open the browser and enter the url of product page
        Then Product name should be visible

    Scenario: Validate the price of product
        Given Open the browser and enter the url of product page
        Then Product price should be visible

    Scenario: Validate the sizes of product
        Given Open the browser and enter the url of product page
        Then Product size should be visible

    Scenario: Validate the quantity of product
        Given Open the browser and enter the url of product page
        Then Product Quantity should be visible

    Scenario: Validate the product details
        Given Given Open the browser and enter the url of product page
        Then Product Details should be visible

    Scenario: Validate the product description
        Given Given Open the browser and enter the url of product page
        Then Product Description should be visible

    Scenario: Validate the product description
        Given Given Open the browser and enter the url of product page
        Then Product Description should be selectable

    Scenario: Validate the Artist's details
        Given Open the browser and enter the url of product page
        Then Artist's details should be selectable

