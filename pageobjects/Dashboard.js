class Dashboard {

    constructor(page){
      this.page = page 
      this.profile =page.locator("img[alt='profile']")
      this.superAdmin = page.getByText("SUPER_ADMIN")
      this.menuBtn = page.locator("[title='More']")
      this.import = page.locator("[title='Imports']")
      this.users = page.locator("[title='Users]")
      this.peripherals = page.locator("[title='Peripherals")
      this.components = page.locator("[title='Components']")
      this.consumables = page.locator("[title='Consumables]")
      this.accessories = page.locator("[title='accessories]")
      this.assets = page.locator("[title='Assets]")
      this.dashboard = page.locator("[title='dashboard']")
      this.logout = page.getByText("Logout")
    }

    
    async navigateToAdminPage(){
        await this.profile.click()
        await this.superAdmin.click()
    }
    async clickDashboardHomeTab(){
      await this.dashboard.click()
    }
    async clickAssetsTab(){
      await this.assets.click()
    }
    async clickAccessoriesTab(){
      await this.accessories.click()
    }
    async clickConsumablesTab(){
      await this.consumables.click()
    }
    async clickComponentsTab(){
      await this.components.click()
    }
    async clickMenuTab(){
      await this.menuBtn.click()
    }
    async clickImportTab(){
      await this.import.click()
    }
    async clickUsersTab(){
      await this.users.click()
    }
    async clickPeripheralsTab(){
      await this.peripherals.click()
    }
    async logout(){
      await this.profile.click()
      await this.logout.click()
    }
}
module.exports = {Dashboard}