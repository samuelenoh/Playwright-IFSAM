// @ts-check
const { test, expect } = require('@playwright/test');
// const exp = require('constants');

test("end to end test", async ({page})=>{

    await page.goto("/")
  
     expect(await page).toHaveTitle("IFSAM")
    const emailField = "input[placeholder='Email']"
    const passowrdField = "input[placeholder='Password']"
    const signInBtn = "//span[@class='mx-2']"
    const profileMenu = "img[alt='profile']"
    const menuBtn = "[title='More']"
   
    const nameField = "[name='name']"
   
    const saveBtn = "Save"

    await page.locator(emailField).fill("samuel.enoh@amalitech.com")
    await page.locator(passowrdField).fill("!@Kojo2121")
    expect(await page.locator(signInBtn)).toBeEnabled() 
    await page.locator(signInBtn).click()
    await page.locator(profileMenu).click()
    await page.getByText("SUPER_ADMIN").click()

    // clicking on the settings menu
    await page.locator(menuBtn).click()

    // creating a new status label
    

    // updating an existing status label
    await  
    await page.locator(nameField).fill("Trials")
    expect(await page.getByText(saveBtn)).toBeEnabled()
    await page.getByText(saveBtn).click()
}) 