import { Module } from '@nestjs/common';
import { EvenNumberService } from './even.service';
import { EvenNumberController } from './even.controller';

@Module({
  controllers: [EvenNumberController],
  providers: [EvenNumberService],
})
export class EvenNumberModule {}
