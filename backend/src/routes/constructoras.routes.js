import { Router } from "express";
import { methodsHTTP as constructorasRoutes } from "../controllers/constructora.controllers.js";

const router = Router();

router.get("/", constructorasRoutes.getConstructoras);
router.get("/", constructorasRoutes.getConstructoraId);
router.post("/", constructorasRoutes.addConstructoras);
router.put("/", constructorasRoutes.putConstructoras);
router.delete("/", constructorasRoutes.deleteConstructoras);




export default router;