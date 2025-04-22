import { test } from '@playwright/test';

export class FavoritePage {
    constructor(page){
        this.page = page;
        this.productTitle = page.locator('.products-item__title').first();
    }
}