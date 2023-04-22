import { before, Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

//TC001
Given("open the browser and navigate to the men's page",()=>{
    cy.visit('https://www.thesouledstore.com/men')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

When('Navigate to T-shirts section', () =>{
    cy.xpath("(//img[@alt='men/t-shirts'])[1]").click()
})

Then('All the items should be visible', () => {
    console.log(cy.url().should('include', '/men/t-shirts'))
    cy.wait(5000)
})

//TC002
Given('open the browser and navigate to the items page', () => {
    cy.visit('https://www.thesouledstore.com/men/t-shirts')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

When('Click on the product', () => {
    cy.xpath("(//div[@class='listhoverimg'])[6]").click()
})

Then('The product should be clicked', () => {
    console.log(cy.url().should('include', '/spider-man-sigil-men-tshirts?gte=1'))
    cy.wait(5000)
})

//TC003
Given('open the browser and navigate to the items page', ()=>{
    cy.visit('https://www.thesouledstore.com/men/t-shirts')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Poster should be visible', ()=>{
    cy.xpath("(//img[@alt='T-Shirts Online'])[1]").screenshot({capture:"fullPage", padding: 250})
})

//TC005
Given('Open the browser and enter the url of product page', ()=>{
    cy.visit('https://www.thesouledstore.com/men/t-shirts')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product page should be visible with all details', ()=>{
    cy.wait(5000)
    cy.xpath("(//div[@class='listhoverimg'])[6]").click().screenshot({capture: "fullPage", padding: 400})
})

//TC006
Given('Open the browser and enter the url of product page', ()=>{
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product Image should be visible', ()=>{
    cy.xpath("(//img[@title='Spider-Man: Sigil T-Shirts Online at The Souled Store'])[1]").screenshot({capture: "fullPage", padding: 300})
})

//TC008
Given('Open the browser and enter the url of product page', ()=>{
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product name should be visible', () => {
    cy.xpath("(//h1[normalize-space()='Spider-Man: Sigil'])[1]").should("have.text", "Spider-Man: Sigil")
})

//TC009
Given('Open the browser and enter the url of product page', () => {
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product price should be visible', ()=> {
    cy.xpath("(//span[@class='fbold'])[1]").should("have.text", "₹ 599")
})

//TC013
Given('Open the browser and enter the url of product page', () =>{
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product size should be visible', ()=>{
    cy.xpath("(//ul[@class='sizelist'])[1]").screenshot({capture: "fullPage", padding: 300})
})

//TC015
Given('Given Open the browser and enter the url of product page', () => {
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product Quantity should be visible', ()=>{
    cy.xpath("//select[@class='qtyOption']").click().screenshot({capture: "fullPage", padding: 400})
})

//TC010
Given('Given Open the browser and enter the url of product page', () => {
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product Details should be visible', ()=>{
    cy.xpath("(//a[normalize-space()='Product Details'])[1]").screenshot({capture: "fullPage", padding: 300})
})

//TC012
Given('Given Open the browser and enter the url of product page', () => {
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product Description should be visible', () => {
    cy.wait(2000)
    cy.get("#headingTwo .collapsed").screenshot({capture: "fullPage", padding: 400})
})

//TC014
Given('Given Open the browser and enter the url of product page', () => {
    cy.visit('https://www.thesouledstore.com/product/spider-man-sigil-men-tshirts?gte=1')
    cy.wait(5000)
    cy.get('#moe-dontallow_button').click()
})

Then('Product Description should be selectable', () => {
    cy.wait(2000)
    cy.get("#headingTwo .collapsed").click().screenshot({capture: "fullPage", padding: 400})
})

