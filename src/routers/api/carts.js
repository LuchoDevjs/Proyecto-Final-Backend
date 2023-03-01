import { Router } from "express";
import cartsControllers from "../../controllers/carts.controllers.js";
import authMiddleware from "../../middlewares/auth.js";

const router = Router();

// Usa el middleware de autenticación en todas las rutas
router.use(authMiddleware);

// Rutas para los carritos de compras
router.get("/", cartsControllers.getAllCarts);
router.get("/:cartId/products", cartsControllers.getProductsInCart);
router.get("/:userId/", cartsControllers.getCartByUserId);
router.post("/:cartId/products", cartsControllers.addProductToCart);
router.post("/", cartsControllers.createCart);
router.put("/:cartId", cartsControllers.updateCart);
router.delete(
  "/:cartId/product/:productId",
  cartsControllers.removeProductFromCart
);
router.delete("/:cartId", cartsControllers.deleteCart);

export default router;
