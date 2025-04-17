import { test } from '@playwright/test';

export class UserAddressApi {
    constructor(request){
        this.request = request;
    }

    async getAdressList(options){
        return await test.step('Получить список адресов доставки', async() => {
            const response = this.request.get('./api/user-address-list/', {...options});
            return response;
        });
    }

    async addAddress(options){
        return await test.step('Добавить адрес доставки', async() => {
            const response = this.request.post('./api/user-address-list/', {...options});
            return response;
        });
    }

    async changeAddress(options){
        return await test.step('Изменить адрес доставки', async() => {
            const response = this.request.patch('./api/user-address-list/', {...options});
            return response;
        });
    }

    async deleteAddress(options){
        return await test.step('Удалить адрес доставки', async() => {
            const response = this.request.delete('./api/user-address-list/', {...options});
            return response;
        });
    }
}