export interface PaymentIntent {
  id: string;
  client_secret: string;
  amount: number;
  status: string;
}

export interface CallPayment {
  callId: string;
  userId: string;
  creatorId: string;
  amount: number;
  status: 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
}