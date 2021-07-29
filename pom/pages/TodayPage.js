import { Selector, t } from 'testcafe'
import { TASKS } from '../data/Constants'

class TodayPage {

    constructor(){
        // Tasks
        this.addNewTaskButton = Selector('.plus_add_button')
        this.taskTitleDiv = Selector('.public-DraftStyleDefault-block')
        this.taskDescriptionTextarea = Selector('.task_editor__description_field')
        this.addTaskButton = Selector('.reactist_button').withExactText('Add task')
        this.taskItem = Selector('.task_list_item')
        this.taskCreatedTitle = Selector('.task_content')
        this.taskCreatedDescription = Selector('.task_description')
        this.taskMoreActionsButton = Selector('.item_actions_more')
        this.taskDeleteItem = Selector('li[data-action-hint="task-actions-overflow-menu-delete"]')
        this.taskDeleteConfirmationButton = Selector('.ist_button_red')
        this.selectDateButton = Selector('.item_due_selector')
        this.tomorrowButtton = Selector('button[data-action-hint="scheduler-suggestion-tomorrow"]')
        
        // Menu Options
        this.inboxButton = Selector('#filter_inbox')
        
        // Project
        this.projectToggle = Selector('button[data-track="navigation|projects_panel"]')
        this.projectAddNew = Selector('button[data-track="navigation|projects_quick_add"]')
        this.projectName = Selector('#edit_project_modal_field_name')
        this.projectColorList = Selector('button[aria-labelledby="edit_project_modal_field_color_label"]')
        this.projectColorItem = Selector('.color_dropdown_select__name')
        this.projectIsFavoriteSwitch = Selector('input[name="is_favorite"]')
        this.projectAddButton = Selector('.ist_button_red').withExactText('Add')
        this.projectFavoriteList = Selector('ul[aria-label="Favorites"]')
    }

    async createTask(title, description){
        await t
            .typeText(this.taskTitleDiv, title, {paste: true})
            .typeText(this.taskDescriptionTextarea, description)
            .click(this.addTaskButton)
    }

    async createTomorrowTask(title, description){
        await t
            .typeText(this.taskTitleDiv, title, {paste: true})
            .typeText(this.taskDescriptionTextarea, description)
            .click(this.selectDateButton)
            .click(this.tomorrowButtton)
            .click(this.addTaskButton)
    }

    async createManyTasks(taskNumber){
        for (let index = 0; index < taskNumber; index++) {
            this.createTask(TASKS.NEW_TASK.TODAY.TITLE + index, TASKS.NEW_TASK.TODAY.DESCRIPTION + index)
        }
    }

    async deleteAllTasks(taskNumber){
        for (let index = 0; index < taskNumber; index++) {
            await t
                .click(this.taskItem.nth(0))
                .click(this.taskMoreActionsButton)
                .click(this.taskDeleteItem)
                .click(this.taskDeleteConfirmationButton)
        }
    }

    async createProject(name, color){
        await t
            .click(this.projectToggle)
            .click(this.projectAddNew)
            .typeText(this.projectName, name)
            .click(this.projectColorList)
            .click(this.projectColorItem.withExactText(color))
            .click(this.projectIsFavoriteSwitch)
            .click(this.projectAddButton)
    }
}

export default new TodayPage