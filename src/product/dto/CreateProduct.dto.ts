import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateProductDTO {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  quantityAvailable: number;

  @IsNotEmpty()
  description: string;

  @IsOptional()
  features?: Array<{ name: string; description: string }> = [];

  @IsOptional()
  images?: Array<{ url: string; description: string }> = [];

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  createdAt: string;

  @IsNotEmpty()
  updatedAt: string;
}
