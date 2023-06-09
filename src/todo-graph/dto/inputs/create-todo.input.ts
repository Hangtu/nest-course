import { Field } from "@nestjs/graphql/dist/decorators/field.decorator";
import { InputType } from "@nestjs/graphql/dist/decorators/input-type.decorator";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";


@InputType()
export class CreateTodoInput {
  @Field( () => String, { description: 'What needs to be done' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  description: string;
}