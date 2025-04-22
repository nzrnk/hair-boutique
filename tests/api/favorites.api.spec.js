import { test } from '../../src/fixtures/fixtures';
import { expect } from '@playwright/test';
import { prodId } from '../../src/data/index';

 

test.describe('@API Добавление товара в избранное', async() => {
    let favoritesId;
    test.afterEach('Удалить товар из избранного', async({ authAppApi }) => {
        await authAppApi.favoritesApi.deleteFromFavorites({
            data: {
                id: favoritesId,
            }
        });
    });

    test('@API Добавить товар в избранное', async({ authAppApi }) => {
        const response = await authAppApi.favoritesApi.addToFavorites({
            data: {
                id: prodId
            }
        });
        const body = await response.json();
        const productId = body.data[0].id;
        await test.step('Товар добавлен в избранное', async() => {
            await expect(productId).toBe(prodId);
            await expect(body.errors).toHaveLength(0);
        });
    });
});





