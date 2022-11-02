import { CreateVapidDto } from './dto/create-vapid.dto';
import { Injectable } from '@nestjs/common';
import { generateVAPIDKeys, VapidKeys } from 'web-push';

@Injectable()
export class VapidService {
  private readonly vapidKeys: Map<string, VapidKeys> = new Map();

  create(createVapidDto: CreateVapidDto) {
    if (this.vapidKeys.has(createVapidDto.userId)) {
      return { publicKey: this.vapidKeys.get(createVapidDto.userId).publicKey };
    } else {
      const keys = generateVAPIDKeys();
      this.vapidKeys.set(createVapidDto.userId, keys);
      return { publicKey: this.vapidKeys.get(createVapidDto.userId).publicKey };
    }
  }
}
