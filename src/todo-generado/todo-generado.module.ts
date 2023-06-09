import { Module } from '@nestjs/common';
import { TodoGeneradoService } from './todo-generado.service';
import { TodoGeneradoResolver } from './todo-generado.resolver';

@Module({
  providers: [TodoGeneradoResolver, TodoGeneradoService]
})
export class TodoGeneradoModule {}
