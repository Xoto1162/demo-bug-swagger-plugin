import {Body, Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';
import AppDto from "./dto/app.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Comment instrospection is not working
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  /**
   * An other comment instrospection test
   */
  @Post()
  postApp(@Body() appDto: AppDto): AppDto {
    return new AppDto();
  }
}
