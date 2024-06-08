import { Module } from '@nestjs/common';
import { RandomNumberService } from './random.service';
import { RandomNumberController } from './random.controller';

@Module({
  controllers: [RandomNumberController],
  providers: [RandomNumberService],
})
export class RandomNumberModule {}
