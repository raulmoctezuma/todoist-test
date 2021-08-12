import { Selector } from 'testcafe'
import { TASKS } from '../data/Constants'

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
        const taskExists = await this.section
            .withText(taskDate)
            .find(this.sectionTaskTitleStyle)
            .withText(taskTitle + taskNumber)
            .exists

        return taskExists 
            ? true 
            : false
    }

    async validateMultipleTasksAdded(numberOfTasks){
        for (let index = 0; index < numberOfTasks; index++) {
            const taskExists = await this.validateTaskAdded(TASKS.NEW_TASK.TODAY.TITLE, TASKS.NEW_TASK.TODAY.DUE_DATE, index)
            if (!taskExists)
                return false
        }
        return true
    }
}

export default new UpcomingPage