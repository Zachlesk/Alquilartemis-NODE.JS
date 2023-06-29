import getConnection from "../db/database.js";

const getConstructoras = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id_constructora, nombre_constructora, nit_constructora, nombre_representante, email_contacto, telefono_contacto FROM constructoras"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo GET ID
const getConstructoraId = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM constructoras WHERE id_constructora = ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addConstructoras = async(req, res) =>{
  try {
    const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = req.body;
    const constructora = {nombre_constructora, nit_constructora,nombre_representante,email_contacto,telefono_contacto};
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO constructoras SET ?", constructora);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo PUT
const putConstructoras = async(req, res) =>{
  try {
    const {id} = req.params;
    const {nombre_constructora,nit_constructora,nombre_representante,email_contacto,telefono_contacto} = req.body;

    const connection = await getConnection();
    const sql = `UPDATE constructoras SET nombre_constructora =  ?, nit_constructora= ?, nombre_representante = ?, email_contacto = ?, telefono_contacto = ? WHERE id_constructora= ?`;
    const result = await connection.query(sql, [
      nombre_constructora,
      nit_constructora,
      nombre_representante,
      email_contacto,
      telefono_contacto
    ],id);
    console.log(result);
    res.json(result);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }


};

// Metodo DELETE
const deleteConstructoras = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const sql = `DELETE FROM constructoras WHERE id_constructora = ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const methodsHTTP = {
  getConstructoras,
  getConstructoraId,
  addConstructoras,
  putConstructoras,
  deleteConstructoras
};
