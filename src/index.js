import app from './app.js';
import { sequelize } from './database/database.js';
//importo y creo las tablas


async function main() {

    
         await sequelize.sync({force:false});
         app.listen(3000);
         console.log('server on port 3000');

    
}

main();
