import { Controller, Get } from '@nestjs/common';
import { FiboNumberService } from './fibo.service';

@Controller('numbers')
export class FiboNumberController {
  constructor(private readonly fiboNumberService: FiboNumberService) {}

  @Get('f')
  async getNumbersWithAverage() {
    return await this.fiboNumberService.getNumbersWithAverage();
  }
}
