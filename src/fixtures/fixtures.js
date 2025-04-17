import { test as base } from '@playwright/test';
import { AppPage } from '../pages/app.page';
import { PrivateUser, existPrivateUser  } from '../data/index';
import { request } from '@playwright/test';
import { AppApi } from '../apiClients/index';
import { getSession } from '../data/index';
import { addressKazan } from '../data/index';
import { UserFormBuilder } from '../builders';

export const test = base.extend({
    app: async({page}, use) => {
        await page.goto('.');
        const app = new AppPage(page);
        await use(app);
    },

    newPrivateUser: ({}, use) => {
        const privateUser = new PrivateUser();
        use(privateUser);
    },

    formData: async({}, use) => {
        const formData = new UserFormBuilder();
        use(formData);
    },

    appReg: async({ app, newPrivateUser }, use) => {
        await app.header.goToLoginPage();
        await app.loginPage.goToRegistration();
        await app.header.goToLoginPage();
        await app.loginPage.goToRegistration();
        await app.registrationPage.registerPrivate({
            name: newPrivateUser.name,
            phone: newPrivateUser.phone,
            email: newPrivateUser.email,
            password: newPrivateUser.password,
            repeatPassword: newPrivateUser.password,
        });
        const userLogin = newPrivateUser.phone;
        const userPassword = newPrivateUser.password;
        await app.registrationPage.goToPersonalAccount();
        await app.personalAccountPage.logOut();
        await use({ userLogin, userPassword });
    },
    
    sessionCookie: async({}, use) => {
        const apiContext = await request.newContext();
        const appApi = new AppApi(apiContext);
        await appApi.userProfileApi.authorizeWithPass({
            data: {
                phone: existPrivateUser.phone,
                password: existPrivateUser.password,
            }
        });
        const state = await apiContext.storageState();
        const cookies = state.cookies;
        const sessionCookie = getSession(cookies);
        await use(sessionCookie);
    },
    
    authAppApi: async({ sessionCookie }, use ) => {
        const newContext = await request.newContext({
            extraHTTPHeaders: {
                Cookie: sessionCookie
            }
        });
        const authAppApi = new AppApi(newContext);
        await use(authAppApi);
    },

    apiAddAndDeleteAddress: async({ authAppApi }, use) => {
        const response = await authAppApi.userAddressApi.addAddress({
            data: {
                address: addressKazan
            }
        });
        const body = await response.json();
        const addedAddress = body.data.list[1];
        const addedAddressId = addedAddress.id;
        
        await use({ authAppApi, addedAddressId });
        
        await authAppApi.userAddressApi.deleteAddress({
            data : {
                id: addedAddressId
            }
        })
        
    },

    appApi: async({ request }, use) => {
        const appApi = new AppApi(request);
        await use(appApi);
    }
})