import { IsOptional, IsString, IsObject } from 'class-validator';

/**
 * Request body for design validation.
 * Accepts either free-text input or structured design data.
 */
export class DesignValidateDto {
  @IsOptional()
  @IsString()
  freeTextInput?: string;

  @IsOptional()
  @IsObject()
  structuredInput?: {
    standard?: string;
    voltage?: string;
    conductor_material?: string;
    conductor_class?: string;
    csa?: number;
    insulation_material?: string;
    insulation_thickness?: number;
  };
}

