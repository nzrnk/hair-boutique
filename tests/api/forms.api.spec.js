import { test } from '../../src/fixtures/fixtures';
import { expect } from '@playwright/test';
import { product } from '../../src/data';

test('@API Отправить форму "Купить в 1 клик"', async({ appApi, formData }) => {
    formData
    .addName()
    .addPhone()
    .addProduct(product.name)
    .addPage(product.page)
    .generate();

   const response = await appApi.formApi.sendBuyOneClickForm({
        data: {
            name: formData.name,
            phone:formData.phone,
            product: formData.product,
            page: formData.page,
        }
   });
   const body = await response.json();
   const success = body.data.success;
   await test.step('Успешная отправка формы', async() => {
        await expect(success).toBeTruthy();
        await expect(body.errors).toHaveLength(0);
   });
});
