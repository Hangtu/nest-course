import { Injectable } from '@nestjs/common';
import { CreateTodoGeneradoInput } from './dto/create-todo-generado.input';
import { UpdateTodoGeneradoInput } from './dto/update-todo-generado.input';
import { TodoGenerado } from './entities/todo-generado.entity';

@Injectable()
export class TodoGeneradoService {
  create(createTodoGeneradoInput: CreateTodoGeneradoInput) {
    const todo =  new TodoGenerado();
    todo.exampleField = createTodoGeneradoInput.exampleField;
    return  todo;
  }

  findAll() {
    return `This action returns all todoGenerado`;
  }

  findOne(id: number) {
    const todo =  new TodoGenerado();
    todo.exampleField = 1;
    return  {todo: todo};
  }

  update(id: number, updateTodoGeneradoInput: UpdateTodoGeneradoInput) {
    return `This action updates a #${id} todoGenerado`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoGenerado`;
  }
}
