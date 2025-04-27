import {handleExeption} from './HandleException'
import { divide} from './MaxUtils'
import { createUser } from './UserController';

try {
    createUser('');
}catch(err){
    const error = handleExeption(err);
    console.log(`[${error.statusCode}]: ${error.message}`)
}