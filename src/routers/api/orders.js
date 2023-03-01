import { Router } from 'express';
import ordersControllers from '../../controllers/orders.controllers.js';

import auth from '../../middlewares/auth.js';

const router = Router();
router.use(auth);
router.get('/', ordersControllers.getAllOrders);
router.get('/:email', ordersControllers.getOrderByEmail);
router.post('/', ordersControllers.createOrders);
export default router;
