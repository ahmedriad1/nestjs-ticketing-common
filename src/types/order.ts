import { Ticket } from './ticket';

export enum OrderStatus {
  Created = 'created',
  Cancelled = 'cancelled',
  AwaitingPayment = 'awaiting_payment',
  Complete = 'complete',
}

type BaseOrder = {
  id: string;
  userId: string;
  status: OrderStatus;
  expiresAt: Date | string;
};

export type Order = BaseOrder & { ticket: string };

export type PopulatedOrder = BaseOrder & { ticket: Ticket };
