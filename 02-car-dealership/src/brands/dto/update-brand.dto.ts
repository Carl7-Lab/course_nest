import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {
  @IsUUID()
  @IsString()
  @IsOptional()
  id?: string;
}
