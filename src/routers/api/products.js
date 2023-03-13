import { Router } from "express";
import ProductController from "../../controllers/products.controller.js";
import auth from "../../middlewares/auth.js";
import { upload } from "../../middlewares/multer.js";

// Creamos un objeto router para manejar las rutas
const router = Router();

// Añadimos el middleware de autenticación a todas las rutas de este archivo
router.use(auth);

// Definimos las rutas y los controladores asociados
router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.post("/", upload.single("image"), ProductController.createProduct);
router.put("/:id", upload.single("image"), ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

// Exportamos el objeto router para ser utilizado en la aplicación
export default router;
