import { test } from '../../src/fixtures/fixtures';
import { expect } from '@playwright/test';


test.describe('Каталог', async() => {
    test('@UI Добавить товар в корзину', async({ app }) => {
        await app.header.goToCareProductSection();
        await app.catalogPage.goToFirstItemInList();
        const productCatalogTitle = await app.productPage.getProductTitle();
        await app.productPage.addToCart();
        await app.productPage.goToCart();
        await test.step('Название товара в корзине соответствует названию добавленного товара из каталога', async() => {
            await expect(app.cartPage.productTitle).toContainText(productCatalogTitle);
        });
        
    });

    test('@UI Добавить товар в избранное', async({ app }) => {
        await app.header.goToCareProductSection();
        await app.catalogPage.goToFirstItemInList();
        const productCatalogTitle = await app.productPage.getProductTitle();
        await app.productPage.addToFavorite();
        await app.header.goToFavorite();
        await test.step('Название товара в избранном соответствует названию добавленного товара из каталога', async() => {
            await expect(app.favoritePage.productTitle).toContainText(productCatalogTitle);
        });
    });
});


