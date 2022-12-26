import { faker } from '@faker-js/faker/locale/id_ID';

export function username(){
    return faker.internet.userName().toLowerCase();

}
export function password(){
    return faker.internet.password();

}