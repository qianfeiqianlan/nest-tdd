import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly logger: Logger) {}
}
