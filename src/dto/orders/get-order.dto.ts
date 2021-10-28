import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from '../../validators';

export class GetOrderDto {
  @IsNotEmpty()
  @IsObjectId()
  userId: string;

  @IsNotEmpty()
  @IsObjectId()
  id: string;
}
