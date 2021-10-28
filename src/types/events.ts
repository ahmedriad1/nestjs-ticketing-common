import { Ticket } from './ticket';

export enum Subjects {
  TicketCreated = 'ticket:created',
  TicketUpdated = 'ticket:updated',
  OrderCreated = 'order:created',
  OrderUpdated = 'order:updated',
}

export interface TicketCreatedEvent extends Ticket {}

export interface TicketUpdatedEvent extends Ticket {}

export interface OrderCreatedEvent {}

export interface OrderUpdatedEvent {}
