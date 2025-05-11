import { test } from '../../src/fixtures/fixtures';
import { expect } from '@playwright/test';
import { prodId } from '../../src/data/index';


test('@API Добавить товар в избранное', async({ authAppApi, deleteFromFavorites }) => {
    deleteFromFavorites.id = prodId;
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
