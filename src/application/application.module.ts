import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { UserService as DomainUserService } from '../domain/service/user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'DOMAIN_USER_SERVICE',
      useClass: DomainUserService,
    },
  ],
  exports: [],
})
export class ApplicationModule {}
