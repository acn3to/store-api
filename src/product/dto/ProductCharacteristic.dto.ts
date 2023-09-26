import { IsString, IsNotEmpty } from 'class-validator';

export class ProductCharacteristicDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
