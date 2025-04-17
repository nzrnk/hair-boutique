import { faker, fakerRU } from "@faker-js/faker";

class PrivateUser {
    constructor(){
        this.name = fakerRU.person.fullName();
        this.phone = (fakerRU.phone.number()).slice(0);
        this.email = faker.internet.email();
        this.password = faker.string.alphanumeric({ length: { min: 8, max: 20} });
        this.repeatPassword;
    }
}

const existPrivateUser = {
    phone: '+7 (921) 222-22-22',
    password: '1234567a'
}

export { PrivateUser, existPrivateUser };