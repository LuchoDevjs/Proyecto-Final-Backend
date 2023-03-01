import { Router } from "express";
import loginController from "../../controllers/login.controller.js";
import userControllers from "../../controllers/user.controllers.js";

// Crear un objeto Router de Express
const router = Router();

// Configurar las rutas
router.post("/login", loginController.login);
router.post("/registro", userControllers.createUser);

// Exportar el router configurado
export default router;
