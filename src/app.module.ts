import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { ApplicationModule } from './application/application.module';
import { HealthModule } from './infrastructure/health/health.module';
import { GlobalModule } from './infrastructure/global.module';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  imports: [GlobalModule, ApplicationModule, HealthModule],
  providers: [
    {
      provide: 'APP_PIPE',
      useClass: ValidationPipe,
    },
    AppService,
  ],
})
export class AppModule {}
