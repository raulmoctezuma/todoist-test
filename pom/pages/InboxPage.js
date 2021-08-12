import { Selector, t } from 'testcafe'

class InboxPage{
    constructor(){
        this.taskItem = Selector('.task_list_item')
        this.taskMoreActionsButton = Selector('.more_actions_button')
        this.taskDeleteItem = Selector('li[data-action-hint="task-overflow-menu-delete"]')
        this.taskDeleteConfirmationButton = Selector('.ist_button_red').withText('Delete')
    }

    async deleteAllTasks(){
        let numberOfTasks = await this.taskItem.count
        for (let index = 0; index < numberOfTasks; index++) {
            await t
                .hover(this.taskItem.nth(0))
                .click(this.taskMoreActionsButton)
                .click(this.taskDeleteItem)
                .click(this.taskDeleteConfirmationButton)
        }
    }

}

export default new InboxPage