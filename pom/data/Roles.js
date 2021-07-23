import { Role } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import { URLS, CREDENTIALS } from './Constants'

export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.STANDARD_USER.EMAIL, CREDENTIALS.STANDARD_USER.PASSWORD)
}, { preserveUrl: true })