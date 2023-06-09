import { InputType, Field, Float, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, isNotEmpty } from 'class-validator';

@InputType()
export class UpdateItemInput {

  @Field(()=> ID )
  @IsString()
  @IsNotEmpty()
  id: string;

  @Field(()=> String )
  @IsString()
  @IsNotEmpty()
  name: string;

  
  @Field(()=> Float, {nullable: true} )
  @IsNumber()
  @IsPositive()
  @IsOptional()
  @IsNotEmpty()
  quantity?: number;


  @Field(()=> String, {nullable: true})
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  quantityUnits?: string;

}
