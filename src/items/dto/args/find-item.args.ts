import { Field,ArgsType, ID } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@ArgsType()
export class FindOneItemArgs {

  @Field(()=> ID )
  @IsString()
  @IsNotEmpty()
  id: string;

}
