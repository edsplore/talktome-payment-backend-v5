import { Router } from 'express';
import { PaymentController } from '../controllers/paymentController';

const router = Router();
const controller = new PaymentController();

router.post('/setup-payment-method', controller.setupPaymentMethod.bind(controller));
router.post('/process-call-payment', controller.processCallPayment.bind(controller));

export { router };