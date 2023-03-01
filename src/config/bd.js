import config from './config.js';
import mongoose from 'mongoose';
import logger from '../utils/Loggers.js';

export const conect = () => {
      try {
            mongoose.set('strictQuery', false);
            const URI = config.MONGODB_URI;
            mongoose.connect(URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
            });
            logger.info('Conectado a la Base de datos MongoDb');
      } catch (error) {
            logger.error(`[connect] config, ${error.message}`);
      }
};
