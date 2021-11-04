import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreatePaymentDto } from '../dto';

export declare abstract class PaymentClientProxy extends ClientProxy {
  send(pattern: 'get_payment', data: { id: string }): Observable<{ id: string }>;
  send(pattern: 'create_payment', data: CreatePaymentDto): Observable<{ id: string }>;
}
