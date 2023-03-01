import { Router } from "express";
import messageController from "../../controllers/message.controller.js";
import auth from "../../middlewares/auth.js";

const router = Router();

// Autenticación requerida para todas las rutas
router.use(auth);

// Ruta para obtener todos los mensajes
router.get("/", messageController.getAllMessages);

// Ruta para obtener los mensajes por email
router.get("/:email/", messageController.findByEmail);

// Ruta para crear un nuevo mensaje
router.post("/", messageController.createMessage);

export default router;
