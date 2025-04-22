import { test } from '@playwright/test';

export class PersonalAccountPage {
    constructor(page){
        this.page = page;
        this.logOutButton = page.getByRole('button', { name: 'Выйти' });
    }

    async logOut(){
        await test.step('Выйти из системы', async() => {
            await this.logOutButton.click();
            await this.page.waitForLoadState();
        })
    }
}
