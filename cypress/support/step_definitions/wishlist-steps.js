import { before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

//TC017
Given('open the browser and navigate to the product page url', () =>{
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('The wishlist icon should be visible', () =>{
    cy.xpath("(//button[@class='btn pointer wishList_Btn'])[1]").screenshot({capture: "fullPage", padding: 350})
})

//TC018
Given('open the browser and navigate to the product page url', ()=>{
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('wishlist button should be enabled or active', ()=>{
    cy.xpath("(//button[@class='btn pointer wishList_Btn'])[1]").screenshot({capture:"fullPage", padding: 300})
})

//TC019
Given("open the browser and navigate to the product page", ()=>{
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

When('Click on wishlist button', () =>{
    cy.wait(2000)
    cy.xpath("(//button[@class='btn pointer wishList_Btn'])[1]").click()
})

When('Click on wishlist icon', ()=>{
    cy.wait(5000)
    cy.xpath("(//div[@class='count'])[1]").click()
})

Then("Product should be available in wishlist", ()=>{
    cy.visit('https://www.thesouledstore.com/mywishlist').screenshot({capture: "fullPage", padding: 500})
})


