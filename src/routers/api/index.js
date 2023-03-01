import { Router } from 'express';
import carts from './carts.js';
import login from './login.js';
import products from './products.js';
import user from './user.js';
import orders from './orders.js';
import message from './message.js';
import info from './info.js';

const router = Router();
router.use('/', login);
router.use('/products', products);
router.use('/cart', carts);
router.use('/user', user);
router.use('/order', orders);
router.use('/message', message);
router.use('/info', info);

export default router;
