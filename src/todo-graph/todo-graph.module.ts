import { Module } from '@nestjs/common';
import { TodoGraphResolver } from './todo-graph.resolver';
import { TodoGraphService } from './todo-graph.service';

@Module({
  providers: [TodoGraphResolver, TodoGraphService]
})
export class TodoGraphModule {}
