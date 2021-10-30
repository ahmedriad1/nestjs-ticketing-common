import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateTicketDto, UpdateTicketWithIdDto } from '../dto';
import { Ticket } from './ticket';

export declare abstract class TicketClientProxy extends ClientProxy {
  send(pattern: 'all_tickets', data: {}): Observable<Ticket[]>;
  send(pattern: 'get_ticket', data: string): Observable<Ticket>;
  send(pattern: 'create_ticket', data: CreateTicketDto): Observable<Ticket>;
  send(pattern: 'update_ticket', data: UpdateTicketWithIdDto): Observable<Ticket>;
}
