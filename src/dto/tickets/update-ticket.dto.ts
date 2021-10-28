import { IsDecimal, IsOptional, IsString, IsNotEmpty } from 'class-validator';
import { IsGreaterThan, IsObjectId } from '../../validators';

export class UpdateTicketDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsDecimal()
  @IsGreaterThan(0)
  price: number;
}

export class UpdateTicketWithIdDto extends UpdateTicketDto {
  @IsNotEmpty()
  @IsObjectId()
  id: string;
}
