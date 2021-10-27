import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto, UpdateTicketWithIdDto } from './dto/update-ticket.dto';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Ticket = {
  id: string;
  title: string;
  price: number;
  ownerId: string;
};

interface IAuthenticatedResponse {
  user: User;
  token: string;
}

declare abstract class AuthClientProxy extends ClientProxy {
  send(pattern: 'login', data: LoginDto): Observable<IAuthenticatedResponse>;

  send(pattern: 'register', data: RegisterDto): Observable<IAuthenticatedResponse>;

  send(pattern: 'logout', data: {}): Observable<null>;

  send(pattern: 'validate_token', data: string): Observable<User>;
}

declare abstract class TicketClientProxy extends ClientProxy {
  send(pattern: 'create_ticket', data: CreateTicketDto): Observable<Ticket>;

  send(pattern: 'update_ticket', data: UpdateTicketWithIdDto): Observable<Ticket>;

  send(pattern: 'get_ticket', data: string): Observable<Ticket>;

  send(pattern: 'all_tickets', data: {}): Observable<Ticket[]>;
}

export { LoginDto, RegisterDto, CreateTicketDto, UpdateTicketDto, UpdateTicketWithIdDto };
export { AuthClientProxy, TicketClientProxy };
export * from './exceptions/exception-filter';
export * from './pipes/microservice-validation.pipe';
