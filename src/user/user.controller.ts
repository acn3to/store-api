import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() data: CreateUserDTO) {
    this.userRepository.save(data);
    return data;
  }

  @Get()
  async listUSers() {
    return this.userRepository.list();
  }
}
