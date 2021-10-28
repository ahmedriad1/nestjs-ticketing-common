import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from '../../validators';

export class DeleteOrderDto {
  @IsNotEmpty()
  @IsObjectId()
  userId: string;

  @IsNotEmpty()
  @IsObjectId()
  id: string;
}
