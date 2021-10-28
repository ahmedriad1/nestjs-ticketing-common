import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from '../../validators';

export class CreateOrderDto {
  @IsNotEmpty()
  @IsObjectId()
  userId: string;

  @IsNotEmpty()
  @IsObjectId()
  ticketId: string;
}
