import { test } from '@playwright/test';

export class CartPage {
    constructor(page){
        this.page = page;
        this.productTitle = page.locator('.cart-item__title');
    }
}