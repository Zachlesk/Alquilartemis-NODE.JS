/* Para continuar con la configuración general de las rutas de categorias, creamos un archivo en el directorio de rutas llamado categorias.routes.js */

/* En este archivo importamos al enrutador (router) que nos guiara al framework express que esta en el mismo */

import { Router } from "express";

/* Nos movemos al archivo de categoria.routes para importar los methods del controller para que podamos usar el enrutador por medio de la accion de get que hicimos en el controller */

import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";

/* Almacenamos en una constante el Router que importamos previamente del framework express */

const router = Router();

/* Tomamos a router para obtener (get) por medio del endpoint la informacion mandada por el cliente */

/* A la ruta, le asignamos el importamos el controller de methods y como este contenia la accion get, por medio de un punto, le asignamos el valor */
/* A la ruta, le asignamos el importamos el controller de methods y como este contenia la accion add para el post, por medio de un punto, le asignamos el valor de addCategorias en este caso */

router.get("/", categoriaController.getCategorias);

router.post("/", categoriaController.addCategorias);

//Y por ultimo exportamos la constante para poder usarla desde otros modulos
export default router;