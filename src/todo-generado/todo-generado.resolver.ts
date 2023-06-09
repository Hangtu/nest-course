import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TodoGeneradoService } from './todo-generado.service';
import { TodoGenerado } from './entities/todo-generado.entity';
import { CreateTodoGeneradoInput } from './dto/create-todo-generado.input';
import { UpdateTodoGeneradoInput } from './dto/update-todo-generado.input';

@Resolver(() => TodoGenerado)
export class TodoGeneradoResolver {
  constructor(private readonly todoGeneradoService: TodoGeneradoService) {}

  @Mutation(() => TodoGenerado)
  createTodoGenerado(@Args('createTodoGeneradoInput') createTodoGeneradoInput: CreateTodoGeneradoInput) {
    return this.todoGeneradoService.create(createTodoGeneradoInput);
  }

  @Query(() => [TodoGenerado], { name: 'todoGenerado' })
  findAll() {
    return this.todoGeneradoService.findAll();
  }

  @Query(() => TodoGenerado, { name: 'todoGenerado' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.todoGeneradoService.findOne(id);
  }

  @Mutation(() => TodoGenerado)
  updateTodoGenerado(@Args('updateTodoGeneradoInput') updateTodoGeneradoInput: UpdateTodoGeneradoInput) {
    return this.todoGeneradoService.update(updateTodoGeneradoInput.id, updateTodoGeneradoInput);
  }

  @Mutation(() => TodoGenerado)
  removeTodoGenerado(@Args('id', { type: () => Int }) id: number) {
    return this.todoGeneradoService.remove(id);
  }
}
