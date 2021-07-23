import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.emailInput = Selector('#email')
        this.passwordInput = Selector('#password')
        this.loginButton = Selector('.sel_login')
        this.errorMessage = Selector('div.error_msg')
    }

    async submitLoginForm(email, password){
        if (email != null)
            await t.typeText(this.emailInput, email, {paste: true})
        if (password != null )
            await t.typeText(this.passwordInput, password, {paste: true})
        await t.click(this.loginButton)
    }
}

export default new LoginPage