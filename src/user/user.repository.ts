import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users = [];

  async save(user: object) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async emailAlreadyExists(email: string) {
    const possibleUser = this.users.find((user) => user.email === email);

    return possibleUser !== undefined;
  }
}
