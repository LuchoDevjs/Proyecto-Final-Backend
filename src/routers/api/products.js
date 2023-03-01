import { Router } from "express";
import ProductController from "../../controllers/products.controller.js";
import auth from "../../middlewares/auth.js";
import { upload } from "../../middlewares/multer.js";

const router = Router();
router.use(auth);

// Obtener todos los productos
router.get("/", ProductController.getAllProducts);

// Obtener un producto por ID
router.get("/:id", ProductController.getProductById);

// Crear un nuevo producto
router.post("/", upload.single("filename"), ProductController.createProduct);

// Actualizar un producto
router.put("/", upload.single("filename"), ProductController.updateProduct);

// Eliminar un producto por ID
router.delete("/:id", ProductController.deleteProduct);

export default router;
