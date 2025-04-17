import { test } from '@playwright/test';

export class Header {
    constructor(page){
        this.page = page;

        this.userLabel = page.getByLabel('Войти в личный кабинет');
        this.favoriteLabel = page.getByLabel('Перейти в избранное');

        this.careProductsLink = page.getByRole('link', { name: 'Средства для ухода', exact: true });

        this.burgerButton = page.locator('.header-nav__nav-control');
        this.serviceButton = page.getByRole('link', { name: 'Капсульное (горячее) наращивание волос' });
        this.chooseCityButton = page.getByRole('button', { name : 'Да' });

        this.mainMenu = page.locator('.header-nav__main-menu-container');
    }

    async chooseCity(){
        await test.step('Подтвердить выбор города', async() => {
            await this.chooseCityButton.click();
        })
    }

    async openMenu(){
        await test.step('Открыть главное меню', async() => {
            await this.burgerButton.click();
            await this.mainMenu.waitFor({ state: 'visible' }); 
        })
    }

    async goToService(){
        await test.step('Перейти в раздел сайта "Капсульное наращивание волос"', async() => {
            await this.serviceButton.click();
            await this.page.waitForLoadState('load', { timeout: 5000 });
        })
    }

    async goToLoginPage(){
        await test.step('Перейти в раздел авторизации', async() => {
            await this.userLabel.click();
        })
    }

    async goToCareProductSection(){
        await test.step('Перейти в раздел каталога "Средства для ухода"', async() => {
            await this.careProductsLink.click();
        })
    }

    async goToFavorite(){
        await test.step('Перейти в избранное', async() => {
            await this.favoriteLabel.click();
        })
    }
}