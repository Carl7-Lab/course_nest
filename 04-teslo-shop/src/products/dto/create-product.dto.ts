import {
  IsArray,
  IsIn,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export enum ValidSizes {
  XS = 'XS',
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
  XXL = 'XXL',
  XXXL = 'XXXL',
}

export enum ValidTypes {
  SHIRTS = 'shirts',
  PANTS = 'pants',
  HOODIES = 'hoodies',
  HATS = 'hats',
}

export enum ValidGenders {
  MEN = 'men',
  WOMEN = 'women',
  KID = 'kid',
  UNISEX = 'unisex',
}

export class CreateProductDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  slug?: string;

  @IsNumber()
  @IsInt()
  @IsPositive()
  @IsOptional()
  @Min(0)
  stock?: number;

  @IsString({ each: true })
  @IsArray()
  @IsIn(Object.values(ValidSizes), { each: true })
  sizes: ValidSizes[];

  @IsString()
  @IsIn(Object.values(ValidTypes))
  @IsOptional()
  type?: ValidTypes;

  @IsString()
  @IsIn(Object.values(ValidGenders))
  @IsOptional()
  gender?: ValidGenders;

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  images?: string[];
}
