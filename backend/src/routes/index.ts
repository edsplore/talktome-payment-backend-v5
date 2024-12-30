import { Application } from 'express';
import { router as paymentRoutes } from './paymentRoutes';
import { authMiddleware } from '../middleware/auth';

export const setupRoutes = (app: Application): void => {
  app.use('/api', authMiddleware, paymentRoutes);
};