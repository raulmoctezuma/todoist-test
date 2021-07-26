import loginPage from '../pages/loginPage'
import { ClientFunction } from 'testcafe';
import { STANDARD_USER } from '../data/Roles'
import { URLS, CREDENTIALS, MESSAGES } from '../data/Constants'

fixture('Login Feature test')
    .page `${URLS.LOGIN_URL}`

/*
1. Successful login. Define a test case that performs a successful login, using credentials stored in a .env file.
 */
test.meta('type', 'smoke')('As a user, I should be able to log in succefully by providing valid credentials', async t => {
    await t.useRole(STANDARD_USER)
    const getLocation = ClientFunction(() => document.location.href);
    await t.expect(getLocation()).contains(URLS.LOGEDIN_URL)
})

/*
2. Unsuccessful login. Define at least 3 negative scenarios for the login. Reuse the same function for all the scenarios (positive and negative).
*/
test.meta('type', 'smoke')('As user, I should not be able to log in successfully without providing any credentials', async t => {
    await loginPage.submitLoginForm(null, null)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.EMAIL_REQUIRED)
})

test('As a user, I should not be able to log in successfully only by filling the email field.', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL, null)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.NO_PASSWORD)
})

test('As a user, I should not be able to log in successfully, providing the wrong credentials.', async t => {
    await loginPage.submitLoginForm(CREDENTIALS.INVALID_USER.EMAIL, CREDENTIALS.INVALID_USER.PASSWORD)
    await t.expect(loginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_PAGE.INVALID_CREDENTIALS)
})
