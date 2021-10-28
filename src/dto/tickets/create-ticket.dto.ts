import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';
import { IsGreaterThan } from '../../validators';
import { IsObjectId } from '../../validators';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsDecimal()
  @IsGreaterThan(0)
  price: number;

  @IsNotEmpty()
  @IsObjectId()
  ownerId: string;
}
