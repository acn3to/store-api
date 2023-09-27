import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { IsEmailUniqueValidator } from './valitation/unique-email.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, IsEmailUniqueValidator],
})
export class UserModule {}
