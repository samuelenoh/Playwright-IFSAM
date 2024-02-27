
class LoginPage {

    constructor(page){
      this.page = page 
      this.emailField = page.getByPlaceholder("Email")
      this.passowrdField = page.getByPlaceholder("Password")
      this.signInBtn = page.locator("//span[@class='mx-2']")
    }

    async goTo(){
      await this.page.goto("https://ifsam.amalitech-dev.net/")
    }
    
    async validLogin(email,Password){
        await this.emailField.fill(email)
        await this.passowrdField.fill(Password)
        await this.signInBtn.click()
    }
}
module.exports = {LoginPage}