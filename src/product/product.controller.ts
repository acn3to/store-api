import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';
import { CreateProductDTO } from './dto/CreateProduct.dto';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Post()
  async createProduct(@Body() data: CreateProductDTO) {
    this.productRepository.save(data);
    return data;
  }

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }
}
