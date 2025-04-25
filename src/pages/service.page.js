import { test } from '@playwright/test';

export class ServicePage {
    constructor(page){
        this.page = page;

        this.calculatorButton = page.getByRole('button', { name: 'Не знаю с чего начать' })
        this.sigUpForServiceButton = page.getByRole('button', { name: 'Записаться' }).nth(1);
        this.sendFormButton = page.locator('.form-block__form-submit').getByRole('button', { name: 'Записаться' }).nth(1);
        
        this.purposeDropdown = page.getByPlaceholder('Цель');
        this.lengthDropdown = page.getByPlaceholder('Длина своих волос');
        this.thicknessDropdown = page.getByPlaceholder('Густота своих волос');

        this.nameField = page.locator('.form-block__form-fields > .form-field-name').getByRole('textbox', { name: 'Имя' }).nth(1);
        this.phoneField = page.locator('.form-block__form-fields > .form-field-phone').getByRole('textbox', { name: 'Телефон' }).nth(1);
        
        this.successTitle = page.locator('.form-block__success-title');
        this.successMessage = page.locator('.form-block__success-message');
    }

    async calculateHairExtension({purpose, length, thickness}){
        await test.step('Рассчитать стоимость наращивания волос', async() => {
            await this.calculatorButton.click();
            await this.purposeDropdown.click();
            this.option = this.page.getByRole('option', { name: purpose });
            await this.option.click();
            await this.lengthDropdown.click();
            this.option = this.page.getByRole('option', { name: length });
            await this.option.click();
            this.thicknessDropdown.click();
            this.option = this.page.getByRole('option', { name: thickness });
            await this.option.click();
            await this.sigUpForServiceButton.click();
        })
    }

    async sendPriceCalculatorForm(phone){
        await test.step('Отправить форму рассчета стоимости наращивания волос', async() => {
            await this.nameField.click();
            await this.nameField.fill(`Тестовая форма не обрабатывать`);
            await this.phoneField.click();
            await this.phoneField.fill(phone);
            await this.sendFormButton.click();
       })
    }

    async waitForSuccessMessage(){
        await test.step('Ожидать появления сообщения об успешной отправке формы', async() => {
            await this.successTitle.waitFor({ state: 'visible' });
            await this.successMessage.waitFor({ state: 'visible' });
        })
    }

}