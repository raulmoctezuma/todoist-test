import commonPage from '../pages/CommonPage'
import projectPage from '../pages/ProjectPage'
import { STANDARD_USER } from '../data/Roles'
import { URLS, API_WAIT, PROJECTS} from '../data/Constants'

fixture('Project feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
        await commonPage.deleteAllProjects()
        await await t.expect(commonPage.projectListItem.exists).notOk()
    })
    .afterEach( async t => {
        await t.wait(API_WAIT)
    })

/*
6. Create a new project, choose any color you like and add it to favorites.
*/
test('As a user, I want to create a new project. So that I can organize my tasks.', async t => {
    await commonPage.createProject(PROJECTS.NEW_PROJECT.NAME, PROJECTS.NEW_PROJECT.COLOR, PROJECTS.NEW_PROJECT.IS_FAVORITE)
    await t.expect(await projectPage.validateSingleProjectCreated(PROJECTS.NEW_PROJECT.NAME, PROJECTS.NEW_PROJECT.COLOR, PROJECTS.NEW_PROJECT.IS_FAVORITE)).ok()
})