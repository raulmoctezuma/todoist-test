import { Selector, t } from 'testcafe'
import { TASKS, TEST_SPEED_ADD_TASK } from '../data/Constants'

class CommonPage {
    constructor(){
        // Top Menu
        this.searchBar = Selector('.quick_find__input')
        this.quickAddTaskButton = Selector('#quick_add_task_holder')
        this.wrapperMenuButton = Selector('.left_menu_toggle')
        // Quick Add Task Modal
        this.modalQuickTaskTitleField = Selector('.quick_add__body').find('.public-DraftStyleDefault-block.public-DraftStyleDefault-ltr')
        this.modalQuickTaskDescriptionTextArea = Selector('.quick_add__body').find('.task_editor__description_field no-focus-marker')
        this.modalQuickTaskDueDateButton = Selector('.quick_add__body').find('.item_due_selector')
        this.modalQuickTaskScheduleButton = Selector('.scheduler_popper').find('.scheduler-suggestions-item-label')
        this.modalQuickTaskAddButton = Selector('.quick_add__body').find('.reactist_button--primary')
            .withText('Add task')
        // Sidebar Menu
        this.inboxButton = Selector('#filter_inbox')
        this.todayButton = Selector('#filter_today')
        this.upcomingButton = Selector('#filter_upcoming')
        this.quickAddProjectButton = Selector('button[data-track="navigation|projects_quick_add"]')
        // Quick Add Project Modal
        this.quickAddProjectModal = Selector('div.edit_project_modal')
        this.modalProjectNameField = Selector('#edit_project_modal_field_name')
        this.modalColorList = Selector('.color_dropdown_toggle')
        this.modalColorItem = Selector('.color_dropdown_select__name')
        this.modalIsFavoriteSwitch = Selector('input[name="is_favorite"]')
        this.modalAddButton = Selector('.ist_button_red').withExactText('Add')
        // Project Section
        this.projectListItem = Selector('#projects_list').find('li[data-type="project_list_item"]')
        this.favoriteProjectListItem = Selector('ul[aria-label="Favorites"]').find('li[data-type="project_list_item"]')
        this.projectListElement = Selector('#projects_list').find('li.menu_clickable')
        this.projectDeleteButton = Selector('td[data-track="projects|menu_delete"]')
        this.modalDeleteButton = Selector('.ist_button_red').withExactText('Delete')
        this.moreMenuButton = Selector('.menu')
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

    async createSingleTask(taskTitle, dueDate, taskNumber = 0){
        let taskDate = dueDate
        await t
            .click(this.quickAddTaskButton)
            .typeText(this.modalQuickTaskTitleField, taskTitle + taskNumber, {paste: true})
            .setTestSpeed(TEST_SPEED_ADD_TASK)
        
        if (taskDate != 'Today'){
            await t
                .click(this.modalQuickTaskDueDateButton)
                .click(this.modalQuickTaskScheduleButton.withText(taskDate))
        }

        await t.click(this.modalQuickTaskAddButton)
    }

    async createMultipleTasks(numberOfTasks){
        for (let index = 0; index < numberOfTasks; index++) {
            await this.createSingleTask(TASKS.NEW_TASK.TODAY.TITLE, TASKS.NEW_TASK.TODAY.DUE_DATE, index)
        }
    }

    async deleteAllProjects(){
        let numberOfProjects = await this.projectListItem.count
        for (let index = 0; index < numberOfProjects; index++) {
            await t
                .hover(this.projectListItem.nth(0))
                .click(this.moreMenuButton)
                .click(this.projectDeleteButton)
                .click(this.modalDeleteButton)
        }
    }

    async createProject(name, color, isFavorite = false){
        await t
            .click(this.projectToggle)
            .click(this.projectAddNew)
            .typeText(this.projectName, name)
            .click(this.projectColorList)
            .click(this.projectColorItem.withExactText(color))
        
        if (isFavorite)
            await t.click(this.projectIsFavoriteSwitch)
        
        await t.click(this.projectAddButton)
    }
}

export default new CommonPage