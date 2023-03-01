import { config } from 'dotenv';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: resolve(__dirname, '../../.env') });

export default {
      PORT: process.env.PORT || 8080,
      NODE_ENV: process.env.NODE_ENV || 'development',
      MONGODB_URI: process.env.MONGO_URL || 'mongodb://localhost/express-test',
      TARGET: process.env.TARGET || 'mongo',
      EMAIL_DESTINATARIO: process.env.EMAIL_DESTINATARIO,
      EMAIL: process.env.EMAIL,
      EMAIL_SERVICE: process.env.EMAIL_SERVICE,
      EMAIL_PASS: process.env.EMAIL_PASS,
      TOKEN_TIME: process.env.TOKEN_TIME || '24h',
};
