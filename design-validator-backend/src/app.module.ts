import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DesignValidationModule } from './design-validation/design-validation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DesignValidationModule,
  ],
})
export class AppModule {}
