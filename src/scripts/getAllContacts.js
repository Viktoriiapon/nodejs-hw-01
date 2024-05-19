import fs from 'fs/promises'
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const allContacts = JSON.parse(data);


  if (allContacts.length === 0) {
      console.log("Contacts not exist");
    } else {
        console.table(allContacts);
    }
  } catch (error) {
    console.log(error);
  }
};

console.log(await getAllContacts());

