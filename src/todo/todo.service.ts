import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    {
      id: 1,
      description: 'Uno',
      done: true,
    },
    {
      id: 2,
      description: 'Dos',
      done: true,
    },
    {
      id: 3,
      description: 'Tres',
      done: true,
    },
  ];

  create({description}: CreateTodoDto) {
    const todo = new Todo();
    todo.id = this.todos.length + 1;
    todo.description = description;
    this.todos = [...this.todos, todo];
    return todo;
  }

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException('Este id no existe');

    return todo;
  }

  update(id: number, updateTodoDto: UpdateTodoDto): Todo[] {
    const todo = this.findOne(id);

    const { description, done } = updateTodoDto;

    if (done !== undefined) todo.done = done;
    if (description) todo.description = description;

    this.todos = this.todos.map(dbTodo => {
      if (dbTodo.id === id) return todo;
      return dbTodo;
    })

    return this.todos;
  }

  remove(id: number) {
    this.findOne(id);

    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
