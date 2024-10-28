
import { Router } from "express";
import species_controller from "../controllers/species_controller.js"

const router = Router();

router.post("/", species_controller.store)
router.get("/", species_controller.index)
router.get("/:id", species_controller.show)
router.put("/:id", species_controller.update)
router.delete("/:id", species_controller.destroy)

export default router;