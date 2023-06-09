import { CreateTodoGeneradoInput } from './create-todo-generado.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTodoGeneradoInput extends PartialType(CreateTodoGeneradoInput) {
  @Field(() => Int)
  id: number;
}
