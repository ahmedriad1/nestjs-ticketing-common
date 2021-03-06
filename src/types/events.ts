import { PopulatedOrder } from './order';
import { Ticket } from './ticket';

export enum Subjects {
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',
  ExpirationComplete = 'expiration:complete',
  PaymentCreated = 'payment:created',
}

export interface TicketCreatedEvent extends Ticket {}

export interface TicketUpdatedEvent extends Ticket {}

export interface OrderCreatedEvent extends PopulatedOrder {}

export interface OrderCancelledEvent extends PopulatedOrder {}
export interface ExpirationCompleteEvent {
  orderId: string;
}

export interface PaymentCreatedEvent {
  id: string;
  orderId: string;
  stripeId: string;
}
