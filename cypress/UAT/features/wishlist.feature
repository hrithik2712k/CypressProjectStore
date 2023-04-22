Feature: To validate the Wishlist icon

    Scenario: Validate the Wishlist icon
        Given open the browser and navigate to the product page url
        Then The wishlist icon should be visible

    Scenario: Validate if wishlist button is enabled
        Given open the browser and navigate to the product page url
        Then wishlist button should be enabled or active

    Scenario: Validate if product available in wishlist
        Given open the browser and navigate to the product page
        When Click on wishlist button
        And Click on wishlist icon
        Then Product should be available in wishlist