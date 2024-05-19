import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
try{
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const amountContacts = contacts.length;
    return amountContacts;


}catch(error){
    console.log(error)
}
};

console.log(await countContacts());
