import fs from 'fs/promises'
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
    try{
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        const thinOutContacts = contacts.filter(()=> Math.random() > 0.5);
        await fs.writeFile(PATH_DB, JSON.stringify(thinOutContacts, null, 2), 'utf-8');
        console.log('Some of your contacts were removed');
} catch(error){
    console.log(error)
}

};

await thanos();



