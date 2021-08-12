import { Selector, t } from 'testcafe'

class ProjectPage {
    constructor(){
        // Project Page
        this.projectMenuOptionsButton = Selector('button[aria-label="Project options menu"]')
        // Project Menu Option
        this.editProjectButton = Selector('.icon_menu_item__content').withText('Edit project')
        // Edit Project Modal
        this.modalProjectNameField = Selector('#edit_project_modal_field_name')
        this.modalColorList = Selector('.color_dropdown_toggle')
        this.modalIsFavoriteSwitch = Selector('.reactist_switch')
    }

    async validateSingleProjectCreated(projectName, projectColor, isFavoriteProject){
        await t
            .click(this.projectMenuOptionsButton)
            .click(this.editProjectButton)

        let currentProject = {
            color: await this.modalColorList.innerText,
            isFavorite: await this.modalIsFavoriteSwitch.hasClass('reactist_switch--checked'),
            name: await this.modalProjectNameField.value
        }
        
        return currentProject.name == projectName && currentProject.color == projectColor && currentProject.isFavorite == isFavoriteProject 
            ? true 
            : false
    }

}

export default new ProjectPage