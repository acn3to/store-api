import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsEmailUnique } from '../../decorators/is-email-unique.decorator';

export class CreateUserDTO {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsEmailUnique({ message: 'email is already in use' })
  email: string;

  @MinLength(6)
  password: string;
}
