import { Request, Response } from 'express';
import { PaymentService } from '../services/paymentService';

const paymentService = new PaymentService();

export class PaymentController {
  async setupPaymentMethod(req: Request, res: Response) {
    try {
      const { userId } = req.body;
      const setupIntent = await paymentService.setupPaymentMethod(userId);
      res.json(setupIntent);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async processCallPayment(req: Request, res: Response) {
    try {
      const { callId, userId, creatorId, amount } = req.body;
      const success = await paymentService.processCallPayment(
        callId,
        userId,
        creatorId,
        amount
      );
      res.json({ success });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}