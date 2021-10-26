import { Catch, HttpException, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { throwError } from 'rxjs';

@Catch(HttpException, RpcException)
export class MicroserviceExceptionsFilter implements ExceptionFilter {
  catch(exception: HttpException | RpcException) {
    if (exception instanceof RpcException) return throwError(() => exception.getError());
    return throwError(() => exception.getResponse());
  }
}
