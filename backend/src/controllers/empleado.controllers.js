import getConnection from "../db/database.js";

const getEmpleados = async (req, res) => {
  try {
    const connection = await getConnection();
    const result = await connection.query(
      "SELECT id_empleado, nombre_empleado, email_empleado, celular_empleado, password_empleado FROM empleados"
    );
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo GET ID
const getEmpleadoId = async (req, res) => {
  try {
    const connection = await getConnection();
    const { id } = req.params;
    const sql = `SELECT * FROM empleados WHERE id_empleado = ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const addEmpleados = async(req, res) =>{
  try {
    const {nombre_empleado,email_empleado,celular_empleado,password_empleado} = req.body;
    const empleado = {nombre_empleado, email_empleado,celular_empleado,password_empleado};
    const connection = await getConnection();
    const result = await connection.query("INSERT INTO empleados SET ?", empleado);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Metodo PUT
const putEmpleados = async(req, res) =>{
  try {
    const {id} = req.params;
    const {nombre_empleado,email_empleado,celular_empleado,password_empleado} = req.body;

    const connection = await getConnection();
    const sql = `UPDATE empleados SET nombre_empleado =  ?, email_empleado = ?, celular_empleado = ?, password_empleado = ? WHERE id_empleado = ?`;
    const result = await connection.query(sql, [
      nombre_empleado,
      email_empleado,
      celular_empleado,
      password_empleado
    ],id);
    console.log(result);
    res.json(result);

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }


};

// Metodo DELETE
const deleteEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const sql = `DELETE FROM empleados WHERE id_empleado = ?`;
    const result = await connection.query(sql,id);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const methodsHTTP = {
  getEmpleados,
  getEmpleadoId,
  addEmpleados,
  putEmpleados,
  deleteEmpleados
};