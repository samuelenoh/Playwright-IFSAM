// @ts-check
const { test, expect } = require('@playwright/test');
const {PoManager} = require('../pageobjects/POManager');
const data = JSON.parse(JSON.stringify(require("../utils/loginTestData.json")))

test("end to end test", async ({page})=>{

    const poManager = new PoManager(page)
    const login = poManager.getLoginPage()
    const dashboard = poManager.getDashboardPage()
    const statusLabel = poManager.getStatusLabelPage()

   
    
    await login.goTo()
    await login.validLogin(data.email,data.password)
    await dashboard.navigateToAdminPage()
    await dashboard.clickMenuTab()
    await statusLabel.CreateStatusLabel(data.statusName,data.statusColor)
    await statusLabel.EditStatusLabel()
    await statusLabel.DeleteStatusLabel()

    
})