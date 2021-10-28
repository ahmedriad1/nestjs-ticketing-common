import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { CreateOrderDto, AllOrdersDto, GetOrderDto, DeleteOrderDto } from '../dto';
import { PopulatedOrder } from './order';

export declare abstract class OrderClientProxy extends ClientProxy {
  send(pattern: 'all_orders', data: AllOrdersDto): Observable<PopulatedOrder[]>;
  send(pattern: 'get_order', data: GetOrderDto): Observable<PopulatedOrder>;
  send(pattern: 'create_order', data: CreateOrderDto): Observable<PopulatedOrder>;
  send(pattern: 'cancel_order', data: DeleteOrderDto): Observable<PopulatedOrder>;
}
