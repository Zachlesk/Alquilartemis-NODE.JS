import { Router } from "express";
import { methodsHTTP as empleadosRoutes } from "../controllers/empleado.controllers.js";

const router = Router();

router.get("/", empleadosRoutes.getEmpleados);
router.get("/", empleadosRoutes.getEmpleadoId);
router.post("/", empleadosRoutes.addEmpleados);
router.put("/", empleadosRoutes.putEmpleados);
router.delete("/", empleadosRoutes.deleteEmpleados);

export default router;