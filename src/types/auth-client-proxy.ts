import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { LoginDto, RegisterDto } from '../dto';
import { User } from './user';

export interface AuthenticatedResponse {
  user: User;
  token: string;
}

export declare abstract class AuthClientProxy extends ClientProxy {
  send(pattern: 'login', data: LoginDto): Observable<AuthenticatedResponse>;
  send(pattern: 'register', data: RegisterDto): Observable<AuthenticatedResponse>;
  send(pattern: 'logout', data: {}): Observable<null>;
  send(pattern: 'validate_token', data: string): Observable<User>;
}
