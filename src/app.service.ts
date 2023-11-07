import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class AppService implements OnModuleInit{

  onModuleInit() {
    console.log('app init')
  }
  
  getHello(): string {
    return 'Hello World!';
  }
}
