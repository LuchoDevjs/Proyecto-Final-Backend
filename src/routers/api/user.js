import { Router } from "express";
import userControllers from "../../controllers/user.controllers.js";
import authMiddleware from "../../middlewares/auth.js";

const router = Router();
router.use(authMiddleware);

// Obtener todos los usuarios
router.get("/", userControllers.getAllUsers);

// Obtener usuario por id
router.get("/:id", userControllers.getUserById);

// Crear usuario
router.post("/", userControllers.createUser);

// Actualizar usuario
router.put("/:id", userControllers.updateUser);

// Eliminar usuario por id
router.delete("/:id", userControllers.deleteUser);

export default router;
