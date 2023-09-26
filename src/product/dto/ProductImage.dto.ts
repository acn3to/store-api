import { IsUrl, IsString, IsNotEmpty } from 'class-validator';

export class ProductImageDTO {
  @IsUrl()
  url: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
