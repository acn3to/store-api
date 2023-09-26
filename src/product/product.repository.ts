import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async save(product: object) {
    this.products.push(product);
  }

  async list() {
    return this.products;
  }
}
