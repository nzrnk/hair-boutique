import { test } from "../fixtures/fixtures";

export class RegistrationPage {
    constructor(page){
        this.page = page;

        this.nameFiled = page.getByRole('textbox', { name: 'ФИО' });
        this.phoneField = page.getByRole('textbox', { name: 'Телефон' });
        this.emailField = page.getByRole('textbox', { name: 'E-mail' });
        this.passwordField = page.getByRole('textbox', { name: 'Пароль', exact: true });
        this.repeatPasswordField = page.getByRole('textbox', { name: 'Подтвердите пароль' });
        
        this.personalDataCheckbox = page.getByText('Соглашаюсь на обработку персональных данных');
        
        this.submitButton = page.getByRole('button', { name: 'Отправить' });
        this.personalAccountButton = page.getByLabel('Перейти в личный кабинет');
        
        this.registrationSuccessMessage = page.locator('.page-user-registration__success-message');
    }

    async registerPrivate({ name, phone, email, password }){   
        await test.step('Зарегистрировать тип пользователя "частное лицо"', async() => {
            await this.nameFiled.click();
            await this.nameFiled.fill(`Тестовый-пользователь-${name}`);
            await this.phoneField.click();
            await this.phoneField.fill(phone);
            await this.emailField.click();
            await this.emailField.fill(`test_email_${email}`);
            await this.passwordField.click();
            await this.passwordField.fill(password);
            await this.repeatPasswordField.click();
            await this.repeatPasswordField.fill(password);
            await this.personalDataCheckbox.check();
            await this.submitButton.click();
        })
    }  

    async waitForRegistrationSuccess(){
        await test.step('Ожидать появления сообщения об успехе', async() => {
            await this.registrationSuccessMessage.waitFor({ state: 'visible' });
        })
    }

    async goToPersonalAccount(){
        await test.step('Перейти в личный кабинет', async() => {
            await this.personalAccountButton.waitFor({ state: 'visible' });
            await this.personalAccountButton.click();
        })
    }
}