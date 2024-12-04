import { Controller, Delete, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('seed')
  async seed() {
    return await this.appService.seed();
  }
  @Delete('deleteSeed')
  async delete() {
    return await this.appService.deleteSeed();
  }
}
