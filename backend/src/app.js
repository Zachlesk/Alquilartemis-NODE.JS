/* app.js --> contiene la aplicación */

/* En el archivo, app,js, importamos nuestro framework express */

import express from "express";

/* Hay que importar en la app la ruta de la categoria que estemos solicitando */

import categoriasRoutes from "./routes/categorias.routes.js";

/* A continuación, en el archivo app.js guardamos a express donde lo habiamos importado anteriormente, y de la misma manera, tenemos que exportarlo para poder usarlo en diferentes archivos */
const app = express();

/* Seteamos el puerto en el archivo de app.js que será 5000 */
app.set("port", 5000);

/* Middleware, parsea de JSON */

app.use(express.json());

/* Con la app, usamos .use, que entiende la informacion que necesitemos, ya sea get, post, put, delete */

/* Hay que tener en cuenta que en el app.use ubicado en app.js, hay que trabajar con diferentes routers, entonces asignaremos una ruta de "/api/"nombre que asignemos"/" de esta manera lo guiaremos a una diferente url dependiendo de lo que necesitemos */

app.use("/api/categorias", categoriasRoutes);
app.use("/api/constructoras", constructorasRoutes);
app.use("/api/empleados", empleadosRoutes);
app.use("/api/productos", productosRoutes);

//Y por ultimo exportamos nuestra constante para que se puedan usar en diferentes archivos
export default app;