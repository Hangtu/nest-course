import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TodoGenerado {
  @Field(() => Int, { description: 'Example field (placeholder)', nullable: true })
  exampleField?: number;
}
