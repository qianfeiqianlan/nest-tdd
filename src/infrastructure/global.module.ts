import { Global, Logger, Module } from '@nestjs/common';

@Global()
@Module({
  imports: [],
  providers: [Logger],
  exports: [Logger],
})
export class GlobalModule {}
