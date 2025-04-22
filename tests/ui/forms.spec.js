import { test } from '../../src/fixtures/fixtures';
import { hairCalc } from '../../src/data';


test('@UI Рассчитать стоимость наращивания волос и отправить форму расчета', async({ app, formData }) => {
    formData
    .addPhone()
    .generate()
    
    await app.header.chooseCity();
    await app.header.openMenu();
    await app.header.goToService();
    await app.servicePage.calculateHairExtension({
        purpose: hairCalc.purpose,
        length: hairCalc.length,
        thickness: hairCalc.thickness,
    });
    await app.servicePage.sendPriceCalculatorForm(formData.phone);
})
