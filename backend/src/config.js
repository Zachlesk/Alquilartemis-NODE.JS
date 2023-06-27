/* config.js --> configurar base de datos*/

/* Nos digirigimos hacia el archivo config.js, para importar las configuraciones que asignamos en el archivo .env con ayuda de la dependecia de dotenv e invocarla para exportarla */

import {config} from "dotenv";

/* Ejecutamos el config que importamos para que funcione la dependencia de dotenv */
config();

/* Realmente se crea el archivo de .env  para que los datos no se publiquen y sean seguros, pero hay que justificarlos en el archivo de config, asi que con ayuda d ela dependencia, estableceremos las configuraciones con process.env.HOST,DATABASE,USER,PASSWORD en su caso respectivo, para dato siguiente exportarlo */

export default {
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
}