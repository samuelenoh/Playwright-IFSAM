class StatusLabel{

    constructor(page){

        this.page = page 
        this.status = page.getByText("Status Label")
        this.createStatus = page.getByText("Create New")
        this.name = page.getByPlaceholder("Name")
        this.statusType = page.getByPlaceholder("Select a type")
        this.form = page.locator("form")
        this.color = page.locator("[name='color']")
        this.saveBtn = page.getByText("Save")
        this.actionTab = page.locator("//button[@id='menu-button-0']")
        this.edit = page.getByText("Edit")
        this.delete = page.getByText("Delete")
    }

    async CreateStatusLabel(statusName,statusColor){
        await this.status.click()
        await this.createStatus.click()
        await this.name.fill(statusName)
        await this.statusType.click()
        await this.form.getByText("PENDING").click()
        await this.color.fill(statusColor)
        await this.saveBtn.click()
    }

    async EditStatusLabel(){ 
       
      await this.page.waitForTimeout(2000);
      await this.page.reload();
      await this.actionTab.click()
      await this.edit.click()
      await this.statusType.click()
      await this.form.getByText("PENDING").click()
      await this.saveBtn.click()
    }

    async DeleteStatusLabel(){

        await this.page.waitForTimeout(1000);
        await this.actionTab.click()
        await this.delete.click()
       
    }
    
}
module.exports = {StatusLabel}

// async DeleteStatusLabel(){

// }

// await page.getByText(statusLabel).click()
//     await page.getByText(createBtn).click()
//     await page.locator(nameField).fill("Trial")
//     await page.getByPlaceholder(statusType).click()
//     await page.locator(form).getByText("PENDING").click()
//     await page.locator(color).fill("#1aed84ff")
//     expect(await page.getByText(saveBtn)).toBeEnabled()
//     await page.getByText(saveBtn).click({force:true})