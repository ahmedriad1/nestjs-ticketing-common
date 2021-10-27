import { IsDecimal, IsNotEmpty, IsString } from 'class-validator';
import { IsGreaterThan } from './is-greater-than';

export class CreateTicketDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsDecimal()
  @IsGreaterThan(0)
  price: number;

  @IsNotEmpty()
  @IsString()
  ownerId: string;
}
