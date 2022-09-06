import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/entities';
import { UserService as DomainUserService } from '../../domain/service/user.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('DOMAIN_USER_SERVICE')
    private service: DomainUserService,
  ) {}

  async create(phone: string, name: string): Promise<User> {
    const newUser = User.create(phone, name);
    return newUser;
  }
}
