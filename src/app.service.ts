import { Injectable, Get, Header } from '@nestjs/common';

@Injectable()
export class AppService {

  @Get()
  @Header('content-type', 'application/json')
  getHello(): object {
    return { "hello": "world" };
  }
}
