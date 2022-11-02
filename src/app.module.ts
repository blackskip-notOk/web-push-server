import { VapidController } from './vapid/vapid.controller';
import { LoggerMiddleware } from './log/logger.middelware';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { VapidModule } from './vapid/vapid.module';

@Module({
  imports: [VapidModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(VapidController);
  }
}
