import todayPage from '../pages/todayPage'
import { STANDARD_USER } from '../data/Roles'
import { URLS, TASKS, PROJECTS } from '../data/Constants'

fixture('Today Feature test')
    .page `${URLS.LOGIN_URL}`
    .beforeEach( async t => {
        await t.useRole(STANDARD_USER)
    })

/*
3. Create a new task with Today as the due date and validate it was created correctly.
*/
test("As a user, I want to create a task successfully with today's date. So that I can follow all the assignments for the current date.", async t => {
    await t.click(todayPage.addNewTaskButton)
    todayPage.createTask(TASKS.NEW_TASK.TODAY.TITLE, TASKS.NEW_TASK.TODAY.DESCRIPTION)
    await t
        .expect(todayPage.taskCreatedTitle.withText(TASKS.NEW_TASK.TODAY.TITLE).exists).ok()
        .expect(todayPage.taskCreatedDescription.withText(TASKS.NEW_TASK.TODAY.DESCRIPTION).exists).ok()
        .wait(3000)
})

/*
4. Create a single task selecting tomorrow as the due date and validate it was created correctly.
*/
test("As a user, I want to create a task successfully with tomorrow's date. So that I can follow all the assignments.", async t => {
    await t.click(todayPage.addNewTaskButton)
    todayPage.createTomorrowTask(TASKS.NEW_TASK.TOMORROW.TITLE, TASKS.NEW_TASK.TOMORROW.DESCRIPTION)
    await t
        .click(todayPage.inboxButton)
        .expect(todayPage.taskCreatedTitle.withText(TASKS.NEW_TASK.TOMORROW.TITLE).exists).ok()
        .expect(todayPage.taskCreatedDescription.withText(TASKS.NEW_TASK.TOMORROW.DESCRIPTION).exists).ok()
        .expect(todayPage.taskItem.withText(TASKS.NEW_TASK.TOMORROW.TITLE).find('.date_tom').innerText).contains('Tomorrow')
        .wait(3000)
})

/*
5. Create 10 new tasks with Today as the due date and validate they were created correctly. Task Names should be dynamic.
*/
test("As a user, I want to create ten tasks successfully with today's date. So that I can follow all the assignments for the current date.", async t => {
    await t.click(todayPage.addNewTaskButton)
    const taskNumber = 10
    todayPage.createManyTasks(taskNumber)
    await t.expect(todayPage.taskItem.count).eql(11)
})

/*
6. Create a new project, choose any color you like and add it to favorites.
*/
test('As a user, I want to create a new project. So that I can organize my tasks.', async t => {
    todayPage.createProject(PROJECTS.NEW_PROJECT.NAME, PROJECTS.NEW_PROJECT.COLOR)
    await t.expect(todayPage.projectFavoriteList.child().withText(PROJECTS.NEW_PROJECT.NAME).exists).ok().wait(3000)
})

/*
7. Delete every task created (if there’s any) after your tests.
*/
test("As a user, I want to delete all tasks successfully. So that I can clear all my finished tasks.", async t => {
    const taskNumber = await todayPage.taskItem.count
    todayPage.deleteAllTasks(taskNumber)
    await t.expect(todayPage.taskItem.exists).ok()
    await t.wait(5000)
})