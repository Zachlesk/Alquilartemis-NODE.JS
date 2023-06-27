/* Nos movemos para hacer la conexion con la base de datos a el directorio db que creamos anteriormente, y creamos un archivo llamado database.js  */

/* Para gestionar y conectar a la base de datos, hay que instalar una dependencia llamada promise-mysql, por este modulo podemos conectarnos */
/* En el archivo que creamos anteriormente de database.js, hay que importar el mysql por medio de la dependencia de promise-mysql */

import mysql from "promise-mysql";

/* De la misma m anera, hay que importar la configuracion que creamos para tener los datos necesarios para la conexion, desde el archivo config.js */

import config from "./../config.js";

/* En el archivo, creamos una constante de conexion, para conectar mysql y gestionar su conexion mediante .createConnection y mandar los datos que creamos en el config, y lo hacemos especificando el valor, que en este caso de ejemplo sera host, luego como un json, ponemos la variable que importamos antes que era config y ponemos su valor, en este caso, config.host */

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

/* Y para retornar esta conexion, creamos una arrow function para llamar la constante de conexion, para de igual manera exportarlo para usarlo en otros archivos */

const getConnection = () => {
  return connection;
};

export default getConnection;