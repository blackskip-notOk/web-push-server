import { CreateVapidDto } from './dto/create-vapid.dto';
import { Controller, Post, Header, Get, Param, Body } from '@nestjs/common';
import { VapidService } from './vapid.service';

@Controller('vapid')
export class VapidController {
  constructor(private vapidService: VapidService) {}

  @Post('create')
  @Header('Cache-control', 'none')
  async create(@Body() createVapidDto: CreateVapidDto) {
    const keys = this.vapidService.create(createVapidDto);
    return {
      publicKey: keys.publicKey,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} vapid key`;
  }
}
