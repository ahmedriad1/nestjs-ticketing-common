import { IsNotEmpty, IsString } from 'class-validator';
import { IsObjectId } from '../../validators';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsString()
  token: string;

  @IsNotEmpty()
  @IsObjectId()
  orderId: string;

  @IsNotEmpty()
  @IsObjectId()
  userId: string;
}
