import express from 'express';
import cors from 'cors';
import { router as paymentRoutes } from './routes/paymentRoutes.js';
import { authMiddleware } from './middleware/auth.js';

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use('/api', authMiddleware, paymentRoutes);

  return app;
}