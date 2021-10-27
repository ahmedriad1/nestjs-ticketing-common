import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Ticket = {
  id: string;
  title: string;
  price: number;
  userId: string;
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

  send(pattern: 'update_ticket', data: UpdateTicketDto): Observable<Ticket>;
}

export { LoginDto, RegisterDto, CreateTicketDto, UpdateTicketDto };
export { AuthClientProxy, TicketClientProxy };
export * from './exceptions/exception-filter';
export * from './pipes/microservice-validation.pipe';
