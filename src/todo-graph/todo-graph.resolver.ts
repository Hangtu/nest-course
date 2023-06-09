import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entities/todo.entity';
import { TodoGraphService } from './todo-graph.service';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo-input';
import { StatusArgs } from './dto/args/todos.args';


@Resolver(of => Todo)
export class TodoGraphResolver {


    constructor(private todoGraphService: TodoGraphService) { }

    @Query(() => [Todo], { name: 'todos' })
    findAll(
        @Args() statusArgs: StatusArgs
    ): Todo[] {
        return this.todoGraphService.findAll(statusArgs);
    }

    @Query(() => Todo, { name: 'todo' })
    findOne(
        @Args('id', { nullable: false, type: () => Int }) id: number
    ) {
        return this.todoGraphService.findById(id);
    }

    @Mutation(() => Todo, { name: 'createTodo' })
    createTodo(
        @Args('createTodoInput') createTodoInput: CreateTodoInput
    ) {
        return this.todoGraphService.createTodo(createTodoInput);
    }

    @Mutation(() => Todo, { name: 'updateTodo' })
    update(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
        return this.todoGraphService.updateTodo(updateTodoInput);
    }

    @Mutation(() => Boolean, { name: 'removeTodo' })
    delete(
        @Args('id', { type: () => Int }) id: number
    ) {
        this.todoGraphService.deleteTodo(id);
    }

}
