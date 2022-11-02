import { VapidController } from './vapid.controller';
import { Module } from '@nestjs/common';
import { VapidService } from './vapid.service';

@Module({
  controllers: [VapidController],
  providers: [VapidService],
})
export class VapidModule {}
