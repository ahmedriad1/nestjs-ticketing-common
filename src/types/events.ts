import { PopulatedOrder } from './order';
import { Ticket } from './ticket';

export enum Subjects {
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  OrderCancelled = 'order:cancelled',
}

export interface TicketCreatedEvent extends Ticket {}

export interface TicketUpdatedEvent extends Ticket {}

export interface OrderCreatedEvent extends PopulatedOrder {}

export interface OrderCancelledEvent extends PopulatedOrder {}
