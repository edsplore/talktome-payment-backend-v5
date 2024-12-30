import { stripe } from '../config/stripe';
import { db } from '../config/firebase';
import { PaymentIntent, CallPayment } from '../types/payment';

export class PaymentService {
  async setupPaymentMethod(userId: string): Promise<PaymentIntent> {
    const setupIntent = await stripe.setupIntents.create({
      customer: await this.getOrCreateCustomer(userId),
      payment_method_types: ['card'],
    });

    return {
      id: setupIntent.id,
      client_secret: setupIntent.client_secret!,
      amount: 0,
      status: setupIntent.status
    };
  }

  async processCallPayment(callId: string, userId: string, creatorId: string, amount: number): Promise<boolean> {
    const customerId = await this.getOrCreateCustomer(userId);
    const paymentMethods = await stripe.paymentMethods.list({
      customer: customerId,
      type: 'card',
    });

    if (!paymentMethods.data.length) {
      throw new Error('No payment method found');
    }

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
        customer: customerId,
        payment_method: paymentMethods.data[0].id,
        off_session: true,
        confirm: true,
      });

      await this.savePaymentHistory(callId, userId, creatorId, amount, 'completed');
      return true;
    } catch (error) {
      await this.savePaymentHistory(callId, userId, creatorId, amount, 'failed');
      throw error;
    }
  }

  private async getOrCreateCustomer(userId: string): Promise<string> {
    const userDoc = await db.collection('users').doc(userId).get();
    const userData = userDoc.data();

    if (userData?.stripeCustomerId) {
      return userData.stripeCustomerId;
    }

    const customer = await stripe.customers.create({
      metadata: { userId },
    });

    await db.collection('users').doc(userId).update({
      stripeCustomerId: customer.id,
    });

    return customer.id;
  }

  private async savePaymentHistory(
    callId: string,
    userId: string,
    creatorId: string,
    amount: number,
    status: 'completed' | 'failed'
  ): Promise<void> {
    const payment: CallPayment = {
      callId,
      userId,
      creatorId,
      amount,
      status,
      createdAt: new Date().toISOString(),
      ...(status === 'completed' ? { completedAt: new Date().toISOString() } : {})
    };

    await db.collection('payments').doc(userId).collection('history').add(payment);
  }
}