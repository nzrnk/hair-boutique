import { test } from '@playwright/test';

export class CatalogPage {
    constructor(page){
        this.page = page;
        
        this.firstInListProduct = page.locator('.group-products__item').first();
    }

    async goToFirstItemInList(){
        await test.step('Перейти на детальную страницу первого товара из списка', async() => {
            await this.firstInListProduct.click();
        })
    }


} 