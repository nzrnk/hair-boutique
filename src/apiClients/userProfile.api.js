import { test } from '@playwright/test';

export class UserProfileApi {
    constructor(request) {
        this.request = request;
    }

    async authorizeWithPass(options){
        return await test.step('Авторизоваться в системе с помощью логина и пароля с типом пользователя "частное лицо"', async() => {
            const response = await this.request.post('./api/user-login/', {...options})
            return response;
        });
    }

    async logOut(){
        return await test.step('Выйти из системы', async() => {
            const response = await this.request.post('./api/user-logout/');
            return response;
        })
    };
}