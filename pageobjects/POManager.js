const{LoginPage}= require('./Login')
const{Dashboard} = require('./Dashboard')
const{StatusLabel} = require('./statusLabel')

class PoManager{

    constructor(page){
        this.page = page
        this.login = new LoginPage(this.page)
        this.dashboard = new Dashboard(this.page)
        this.statusLabel = new StatusLabel(page)
    }

    getLoginPage(){
        return this.login
    } 
    getDashboardPage(){
        return this.dashboard
    }
    getStatusLabelPage(){
        return this.statusLabel
    }
}
module.exports = {PoManager}