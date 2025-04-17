import { test } from '@playwright/test';

export class ProductPage {
    constructor(page){
        this.page = page;

        this.addToCartButton = page.getByRole('button', { name: 'Добавить в корзину' });
        this.addToFavoriteButton = page.locator('.product-info__header').getByLabel('Добавить в избранное');
        this.cartButton = page.getByRole('link', { name: 'В корзину' });
        
        this.productTitle = page.getByRole('heading', { name: 'OLLIN BASIC LINE' });
    }

    async getProductTitle(){
        return await test.step('Название товара из детальной страницы товара', async() => {
            const title = await this.productTitle.textContent();
            return title;
        })
        
    }

    async addToCart(){
        await test.step('Добавить товар в корзину', async() => {
            await this.addToCartButton.click();
        })
        
    }

    async addToFavorite(){
        await test.step('Добавить товар в избранное', async() => {
            await this.addToFavoriteButton.click();
        })
    }

    async goToCart(){
        await test.step('Перейти в корзину', async() => {
            await this.cartButton.click();
        })
    }

   

    
}