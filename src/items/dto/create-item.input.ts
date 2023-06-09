import { InputType, Int, Field, Float } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, isNotEmpty } from 'class-validator';

@InputType()
export class CreateItemInput {

  @Field(()=> String )
  @IsString()
  @IsNotEmpty()
  name: string;

  
  @Field(()=> Float )
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  quantity: number;


  @Field(()=> String, {nullable: true})
  @IsString()
  @IsOptional()
  quantityUnits?: string;

}
