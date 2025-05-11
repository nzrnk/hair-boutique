import { faker, fakerRU } from '@faker-js/faker';

export class UserFormBuilder {
    
    addName(){
        this.name = `Тестовая форма не обрабатывать ${Date().toString().slice(0, 24)}`;
        return this;
    }

    addPhone(){
        this.phone = (fakerRU.phone.number()).slice(0);
        return this;
    }

    addProduct(product){
        this.product = product;
        return this;
    }

    addPage(page){
        this.page = page;
        return this;
    }

    generate(){
        return {
            name: this.name,
            phone: this.phone,
            product: this.product,
            page: this.page,
        };
    }


    
    
    
    
    
}