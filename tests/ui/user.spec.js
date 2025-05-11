import { test } from '../../src/fixtures/fixtures';
import { expect } from '@playwright/test';
import { existPrivateUser } from '../../src/data/index';


test.describe('Авторизация/Регистрация пользователя', async() => {
    test('@UI Зарегистрировать тип пользователя "частное лицо"', async({ app, newPrivateUser }) => {
        await app.header.goToLoginPage();
        await app.loginPage.goToRegistration();
        await app.registrationPage.registerPrivate({
            name: newPrivateUser.name,
            phone: newPrivateUser.phone,
            email: newPrivateUser.email,
            password: newPrivateUser.password,
            repeatPassword: newPrivateUser.password,
        });
        await app.registrationPage.waitForRegistrationSuccess();
        await test.step('Появляется сообщение об успешной регистрации', async() => {
            await expect(app.registrationPage.registrationSuccessMessage).toContainText('Учётная запись успешно создана');
        });
    });

    test.only('@UI Авторизоваться на сайте с типом пользователя "частное лицо" c помощью пароля', async({ app }) => {
        await app.header.goToLoginPage();
        await app.loginPage.goToLoginWithPassword();
        await app.loginPage.authorizationWithPassword({
            phone: existPrivateUser.phone,
            password: existPrivateUser.password,
        });
        await app.loginPage.waitForSuccessMessage()
        await test.step('Появляется сообщение об успешной авторизации', async() => {
            await expect(app.loginPage.loginSuccessMessage).toContainText('Вход в систему успешно выполнен');
        })
    });
});



