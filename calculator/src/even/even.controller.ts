import { Controller, Get } from '@nestjs/common';
import { EvenNumberService } from './even.service';

@Controller('numbers')
export class EvenNumberController {
  constructor(private readonly evenNumberService: EvenNumberService) {}

  @Get('e')
  async getNumbersWithAverage() {
    return await this.evenNumberService.getNumbersWithAverage();
  }
}
