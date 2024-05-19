import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {


  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    for (let i = 0; i < number; i += 1) {
        contacts.push(createFakeContact());
      }
      fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log("Contacts list are successfully created!")
  } catch (error) {
    
    console.log(error)
    }
  };

await generateContacts(5);
await generateContacts(3);



