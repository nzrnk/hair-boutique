import { Header } from "../elements";
import { LoginPage, RegistrationPage, CatalogPage, ProductPage, CartPage, FavoritePage, PersonalAccountPage, ServicePage } from "../pages/index";

export class AppPage {
    constructor(page){
        this.page = page;
        this.header = new Header(page);
        this.loginPage = new LoginPage(page);
        this.registrationPage = new RegistrationPage(page);
        this.catalogPage = new CatalogPage(page);
        this.productPage = new ProductPage(page);
        this.cartPage = new CartPage(page);
        this.favoritePage = new FavoritePage(page);
        this.personalAccountPage = new PersonalAccountPage(page);
        this.servicePage = new ServicePage(page);
    }   
}