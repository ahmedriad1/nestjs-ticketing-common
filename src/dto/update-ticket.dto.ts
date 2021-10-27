import { IsDecimal, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { IsGreaterThan } from './is-greater-than';

export class UpdateTicketDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsDecimal()
  @IsGreaterThan(0)
  price: number;
}
