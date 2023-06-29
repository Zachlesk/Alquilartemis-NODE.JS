import { Router } from "express";
import { methodsHTTP as productosRoutes } from "../controllers/producto.controllers.js";

const router = Router();

router.get("/", productosRoutes.getProductos);
router.get("/", productosRoutes.getProductoId)
router.post("/", productosRoutes.addProductos);
router.put("/", productosRoutes.putProductos);
router.delete("/", productosRoutes.deleteProductos);

export default router;