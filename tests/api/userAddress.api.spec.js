import { test } from '../../src/fixtures/fixtures';
import { expect } from '@playwright/test';
import { addressMoscow, addressKazan } from '../../src/data';
import { findElement } from '../../src/data';


test('@API Получить список адресов доставки текущего пользователя', async({ authAppApi }) => {
    const response = await authAppApi.userAddressApi.getAdressList();
    const body = await response.json();
    await test.step('Возвращается список адресов пользователя', async() => {
        expect(body.result).toBeTruthy();    
        expect(body.data).toBeTruthy();
        expect(body.errors).toHaveLength(0);
    })
})

test.describe('@API Добавить новый адрес', async() => {
    let newAddressId;
    test.afterEach('@API Удалить адрес после добавления', async({ authAppApi }) => {
        const response = await authAppApi.userAddressApi.deleteAddress({
            data: {
                id: newAddressId
            }
        })
    })
    
    test('@API Добавить новый адрес в список адресов доставки текущего пользователя', async({ authAppApi }) => {
        const response = await authAppApi.userAddressApi.addAddress({
            data: {
                address: addressMoscow
            }
        })
        const body = await response.json()
        const list = body.data.list;
        const city = findElement(list, 'Москва')    
        newAddressId = city.id;
        await test.step('Возвращается список адресов пользователя с добавленным новым адресом', async() => {
            expect(body.result).toBeTruthy();  
            expect(city.address.full).toContain(addressMoscow)
            expect(body.errors).toHaveLength(0);
        })
        
    })
})


test('@API Сделать адрес избранным', async({ apiAddAndDeleteAddress }) => {
    const response = await apiAddAndDeleteAddress.authAppApi.userAddressApi.changeAddress( {
        data: {
            id: apiAddAndDeleteAddress.addedAddressId,
            address: addressKazan,
            favorite: true
        }
    })
    const list = (await response.json()).data.list;
    const city = findElement(list, 'Казань');
    await test.step('Выбранный адрес становится избранным', async() => {
        expect(city.id).toEqual(apiAddAndDeleteAddress.addedAddressId);  
        expect(city.favorite).toBeTruthy();  
        
    })
})

    

