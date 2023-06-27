/* index.js --> archivo que lanza la aplicación, donde convergen los elementos del programa */

/* Nos movemos al index.js, para importar la constante app que contiene express */
import app from "./app.js";

/* Lo sigueinte es que en una constante main, escuchamos la petición y obtenemos el puerto que seteamos anteriormente, que es 5000 */

const main = () => {
  app.listen(app.get("port"));
};

main();