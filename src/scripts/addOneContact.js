
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    const newContact = createFakeContact();
    contacts.push(newContact);
      fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
      console.log("Contact is successfully created!")
  } catch (error) {
    
    console.log(error)
    }
  };

await addOneContact();
