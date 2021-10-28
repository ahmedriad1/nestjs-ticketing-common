import { IsNotEmpty } from 'class-validator';
import { IsObjectId } from '../../validators';

export class AllOrdersDto {
  @IsNotEmpty()
  @IsObjectId()
  userId: string;
}
