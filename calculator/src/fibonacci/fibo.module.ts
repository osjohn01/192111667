import { Module } from '@nestjs/common';
import { FiboNumberService } from './fibo.service';
import { FiboNumberController } from './fibo.controller';

@Module({
  controllers: [FiboNumberController],
  providers: [FiboNumberService],
})
export class FiboNumberModule {}
