import { faker } from '@faker-js/faker/locale/id_ID';

export function firstname(){
    return faker.name.firstName();

}
export function lastname(){
    return faker.name.lastName();

}
export function password(){
    return faker.internet.password();

}
export function pos(){
    return faker.address.zipCode();

}