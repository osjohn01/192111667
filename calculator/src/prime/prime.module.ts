import { Module } from '@nestjs/common';
import { PrimeNumberService } from './prime.service';
import { PrimeNumberController } from './prime.controller';

@Module({
  controllers: [PrimeNumberController],
  providers: [PrimeNumberService],
})
export class PrimeNumberModule {}
