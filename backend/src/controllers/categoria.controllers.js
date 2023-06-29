/* Para gestionar un enrouter, lo ideal es crear un controller para la misma, asi que crearemos el archivo de controllers para trabajar en el enroutador que creamos en la app.js  */
/* En este archivo, trabajamos, en este caso, los get que necesitamos trabajar, asignamos una constante para retornar una respuesta */

/* Hay que importar en los controllers la conexion que hicimos en el archivo de database.js */
import getConnection from "./../db/database.js";

/* En los controllers, trabajamos en el get para traernos los datos de la base de datos, entonces, dentro de la funcion de get, ajustamos una constante de conexion y traemos lo que importamos anteriormente, y lo ejecutamos con los parentesis() */

/* Como no sabemos el transcurso de tiempo que usará para conectarse la base de datos, hay que especificar un async y await para esperar esta conexion y no seguir un rumbo en desden */

/* Dentro de la funcion get, ajustamos una constante de result, qeu tambien tendrá un await que contendra la constante que creamos antes de conexion con un .query que podemos usar por la dependencia de promise-mysql, para especificar un SELECT  "datos que requerimos" FROM "tabla" */

/* Lo mandamos en formato json lo que estamos requiriendo con un res.json  */
/* 
Hay que envolver en el controller, un try catch en caso tal de que existan errores en el mismo */


// METODO GET 
const getCategorias = async (req, res) => {
  try {
    const connection = await getConnection(); //Garantiza la conexion
    //.query es un metodo de la dependencia promise-mysql
    const result = await connection.query(//Consultor de los datos
      "SELECT id_categoria, nombre_categoria, descripcion_categoria, img_categoria FROM categorias"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo GET ID
const getCategoriaId= async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM categorias WHERE id_categoria= ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Metodo POST 
const addCategorias = async(req, res) =>{
  try {
    //Se tiene que destructurar la request para almacenar datos 
    const {nombre_categoria,descripcion_categoria,img_categoria} = req.body;
    //se almacenan los datos en un literal object enhancement 
    const category = {nombre_categoria, descripcion_categoria, img_categoria};
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO categorias SET ?", category);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo PUT
const putCategorias = async(req, res) =>{
  try {
    const {id} = req.params;
    const {nombre_categoria,descripcion_categoria,img_categoria} = req.body;

    const connection = await getConnection();
    const sql = `UPDATE categorias SET nombre_categoria =  ?, descripcion_categoria= ?, img_categoria = ? WHERE id_categoria = ?`;
    const result = await connection.query(sql, [
      nombre_categoria,
      descripcion_categoria,
      img_categoria,
    ],id);
    console.log(result);
    res.json(result);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }


};

// Metodo DELETE
const deleteCategorias = async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await getConnection();
    const sql = `DELETE FROM categorias WHERE id_categoria = ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

//Y por ultimo exportamos el la constante de methods para usarla en el archivo app.js
/* Tenemos que exportar este controller para poder gestionarlos en nuestras routers, en este caso asignamos una constante llamada methodsHTTP, que contenga la constante que asignamos anteriormente como un get */
export const methodsHTTP = {
  getCategorias,
  getCategoriaId, 
  addCategorias,
  putCategorias,
  deleteCategorias
};