import getConnection from "../db/database.js";

const getProductos = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id_producto, nombre_producto, precio_x_dia, stock_producto, categorias.nombre_categoria FROM productos INNER JOIN categorias ON productos.categoria_producto = categorias.id_categoria;"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo GET ID
const getProductoId = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM productos WHERE id_productos= ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


const addProductos = async(req, res) =>{
  try {
    const {nombre_producto,precio_x_dia,stock_producto,categoria_producto} = req.body;
    const producto = {nombre_producto, precio_x_dia,stock_producto,categoria_producto};
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO productos SET ?", producto);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo PUT
const putProductos = async(req, res) =>{
  try {
    const {id} = req.params;
    const {nombre_producto,precio_x_dia,stock_producto,categoria_producto} = req.body;

    const connection = await getConnection();
    const sql = `UPDATE productos SET nombre_producto =  ?, precio_x_dia = ?, stock_producto = ?, categoria_producto = ? WHERE id_producto = ?`;
    const result = await connection.query(sql, [
      nombre_producto,
      precio_x_dia,
      stock_producto,
      categoria_producto
    ],id);
    console.log(result);
    res.json(result);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }


};

// Metodo DELETE
const deleteProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const sql = `DELETE FROM productos WHERE id_producto = ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const methodsHTTP = {
  getProductos,
  getProductoId,
  addProductos,
  putProductos,
  deleteProductos
};