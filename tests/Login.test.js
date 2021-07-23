import { Selector, t } from 'testcafe'

fixture('Login Feature test')
    .page `https://www.saucedemo.com`

test('As a user, I should be able to log in succefully by providing valid credentials', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button')
        .expect(Selector('.title').innerText).contains('PRODUCTS')
})