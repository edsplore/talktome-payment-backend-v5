import dotenv from 'dotenv';
import path from 'path';

export const loadEnv = (): void => {
  const envPath = path.join(__dirname, '../../.env');
  dotenv.config({ path: envPath });
};