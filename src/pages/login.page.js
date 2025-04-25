import { test } from '@playwright/test';

export class LoginPage {
    constructor(page){
        this.page = page;

        this.registerButton = page.getByRole('link', { name: 'Зарегистрироваться' });
        this.personalAccountButton = page.getByRole('link', { name: 'Перейти в личный кабинет' });
        this.passwordLoginButton = page.getByRole('button', { name: 'Войти с помощью пароля' });
        this.submitButton = page.getByRole('button', { name: 'Войти', exact: true });
        
        this.phoneField = page.locator('.user-login-password__field > .form-field__control--type-tel').getByRole('textbox', { name: 'Телефон' });
        this.passwordFiled = page.getByRole('textbox', { name: 'Пароль' });

        this.loginSuccessMessage = page.locator('.user-login-success__success-message');
    }
    
    async goToRegistration(){
        await test.step('Перейти в раздел регистарции', async() => {
            await this.registerButton.click();
        })
    }

    async goToLoginWithPassword(){
        await test.step('Открыть форму авторизации с помощью пароля', async() => {
            await this.passwordLoginButton.click();
        })
    }

    async authorizationWithPassword({ phone, password }){
        await test.step('Авторизоваться с помощью пароля', async() => {
            await this.phoneField.click();
            await this.phoneField.fill(phone);
            await this.passwordFiled.click();
            await this.passwordFiled.fill(password);
            await this.submitButton.click();
        })
    }

    async waitForSuccessMessage(){
        await test.step('Ожидать появления сообщения об успешной авторизации', async() => {
            await this.loginSuccessMessage.waitFor({ state: 'visible' });
        })
    }
}
