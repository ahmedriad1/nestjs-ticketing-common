import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export type User = {
  id: string;
  name: string;
  email: string;
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

export { LoginDto, RegisterDto };
export * from './exceptions/exception-filter';
export { AuthClientProxy };
