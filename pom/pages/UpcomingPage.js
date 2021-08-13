import { Selector, t } from 'testcafe'

class UpcomingPage{
    constructor(){
        this.section = Selector('.section__wrapper').find('.section')
        this.sectionList = Selector('list_holder').find('.items')
        this.sectionItem = Selector('.task_list_item task_list_item--ctx_menu_opened')
        this.sectionTaskTitle = Selector('.task_content')
        // Style
        this.sectionTaskTitleStyle = '.task_content'
    }

    async validateTaskAdded(taskTitle, dueDate, taskNumber = 0){
        let taskDate = dueDate
        await t.expect(this.section
            .withText(taskDate)
            .find(this.sectionTaskTitleStyle)
            .withText(taskTitle + taskNumber)
            .exists).ok()
        
        return true
    }

    async validateMultipleTasksAdded(taskTitle, dueDate, numberOfTasks){
        for (let index = 0; index < numberOfTasks; index++) {
            const taskExists = await this.validateTaskAdded(taskTitle, dueDate, index)
            if (taskExists == false)
                return false
        }
        return true
    }
}

export default new UpcomingPage