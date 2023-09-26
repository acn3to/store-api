import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() data: object) {
    this.userRepository.save(data);
    return data;
  }

  @Get()
  async listUSers() {
    return this.userRepository.list();
  }
}
