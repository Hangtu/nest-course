import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoGeneradoInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
