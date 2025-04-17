import { test } from '@playwright/test';

export class FavoritesApi {
    constructor(request){
        this.request = request;
        
    }

    async getFavoriteList(options){
        return await test.step('Получить список товаров в избранном', async() => {
            const response = await this.request.get('./api/favorites-list/', {...options});
            return response;
        });
    }

    async addToFavorites(options){
        return await test.step('Добавить товар в избранное', async() => {
            const response = await this.request.post('./api/favorites-list/', {...options});
            return response;
        });
    }

    async deleteFromFavorites(options){
        return await test.step('Удалить товар из избранного', async() => {
            const response = await this.request.delete('./api/favorites-list/', {...options});
            return response;
        });
    }


}