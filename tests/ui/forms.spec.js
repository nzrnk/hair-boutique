import { test } from '../../src/fixtures/fixtures';
import { hairCalc } from '../../src/data';
import { expect } from 'allure-playwright';


test('@UI Рассчитать стоимость наращивания волос и отправить форму расчета', async({ app, formData }) => {
    formData
    .addPhone()
    .generate();
    
    await app.header.chooseCity();
    await app.header.openMenu();
    await app.header.goToService();
    await app.servicePage.calculateHairExtension({
        purpose: hairCalc.purpose,
        length: hairCalc.length,
        thickness: hairCalc.thickness,
    });
    await app.servicePage.sendPriceCalculatorForm(formData.phone);
    await app.servicePage.waitForSuccessMessage();
    await test.step('Появляется сообщение об успешной отправке формы', async() => {
        await expect(app.servicePage.successTitle).toContainText('Ваша заявка принята');
        await expect(app.servicePage.successMessage).toContainText('Мы свяжемся с Вами в ближайшее время');
    })
});
