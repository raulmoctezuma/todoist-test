import commonPage from '../pages/CommonPage'
import upcomingPage from '../pages/UpcomingPage'
import inboxPage from '../pages/InboxPage'
import { STANDARD_USER } from '../data/Roles'
import { URLS, TASKS, API_WAIT, NUMBER_TASKS } from '../data/Constants'

fixture('Task feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
        await t.click(commonPage.inboxButton)
        await inboxPage.deleteAllTasks()
        await t.expect(inboxPage.taskItem.exists).notOk()
    })
    .afterEach( async t => {
        await t.wait(API_WAIT)
    })

/*
3. Create a new task with Today as the due date and validate it was created correctly.
*/
test.meta('type', 'smoke')("As a user, I want to create a task successfully with today's date. So that I can follow all the assignments for the current date.", async t => {
    await t.click(commonPage.todayButton)
    await commonPage.createSingleTask(TASKS.NEW_TASK.TODAY.TITLE, TASKS.NEW_TASK.TODAY.DUE_DATE)
    await t.click(commonPage.upcomingButton)
    await t.expect(await upcomingPage.validateTaskAdded(TASKS.NEW_TASK.TODAY.TITLE, TASKS.NEW_TASK.TODAY.DUE_DATE)).ok()
})

/*
4. Create a single task selecting tomorrow as the due date and validate it was created correctly.
*/
test("As a user, I want to create a task successfully with tomorrow's date. So that I can follow all the assignments.", async t => {
    await commonPage.createSingleTask(TASKS.NEW_TASK.TOMORROW.TITLE, TASKS.NEW_TASK.TOMORROW.DUE_DATE)
    await t.click(commonPage.upcomingButton)
    await t.expect(await upcomingPage.validateTaskAdded(TASKS.NEW_TASK.TOMORROW.TITLE, TASKS.NEW_TASK.TOMORROW.DUE_DATE)).ok()
})

/*
5. Create 10 new tasks with Today as the due date and validate they were created correctly. Task Names should be dynamic.
*/
test.meta('type', 'smoke')("As a user, I want to create ten tasks successfully with today's date. So that I can follow all the assignments for the current date.", async t => {
    await t.click(commonPage.todayButton)
    await commonPage.createMultipleTasks(NUMBER_TASKS.MAX)
    await t.click(commonPage.upcomingButton)
    await t.expect(await upcomingPage.validateMultipleTasksAdded(NUMBER_TASKS.MAX)).ok()
})