import { Router } from "express";
import { registerPalestrante, getPalestrante } from "../controllers/eventoControllers.js"

const router = Router();

router.post("/register", registerPalestrante)
router.get("/listar", getPalestrante)

export default router