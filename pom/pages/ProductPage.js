import { Selector } from 'testcafe'

class ProductPage {
    constructor(){
        this.pageTitle = Selector('.title').withExactText('PRODUCTS')
    }
}

export default new ProductPage