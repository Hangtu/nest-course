import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entities/todo.entity';
import { CreateTodoInput } from './dto/inputs/create-todo.input';
import { UpdateTodoInput } from './dto/inputs/update-todo-input';
import { StatusArgs } from './dto/args/todos.args';

@Injectable()
export class TodoGraphService {

    private todos: Todo[] = [
     { 
        id:1,
        description: 'Uno',
        done: false,
     }
    ]

    findAll(statusArgs?: StatusArgs):Todo[] {
        if(statusArgs.status !== undefined){
            return this.todos.filter(item => item.done === statusArgs.status);
        }
        return this.todos;
    }

    findById(id: number): Todo {
        const todo = this.todos.find(item => item.id = id);

        if(!todo){
            throw new NotFoundException('No se encontro'); 
        }
        return todo;
    }

    createTodo(createTodoInput: CreateTodoInput) {
        const todo = new Todo();
        todo.id = this.todos.length+1;
        todo.description = createTodoInput.description;
        this.todos.push(todo);
        return todo;
    }

    updateTodo(updateTodoInput: UpdateTodoInput){

        const {description, done } = updateTodoInput;

        const todo = this.findById(updateTodoInput.id);

        if(description) todo.description = description;
        if(done !== undefined) todo.done = done;

        this.todos.map(item => {
            return (item.id ===  todo.id) ? todo : item;
        });

        return todo;
    }


    deleteTodo(id: number){
        this.todos = this.todos.filter(item => item.id !== id);
        return true;
    }


}
