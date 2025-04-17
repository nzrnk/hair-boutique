import { test } from '@playwright/test';

export class FormApi {
    constructor(request){
        this.request = request;
    }

    async sendBuyOneClickForm(options){
        return await test.step('Отправить форму "Купить в 1 клик', async() => {
            const response = await this.request.post('./api/form-fastbuy/', {...options})
            return response;
        });
    }
}