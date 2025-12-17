import { Controller, Post, Body } from '@nestjs/common';
import { DesignValidationService } from './design-validation.service';

@Controller('design-validation') // base path
export class DesignValidationController {
  constructor(private readonly designValidationService: DesignValidationService) {}

  @Post('validate') // endpoint
  validateDesign(@Body() body: { freeTextInput: string }) {
    return this.designValidationService.validateDesign(body);
  }
}
