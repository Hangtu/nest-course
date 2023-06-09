import { Injectable } from '@nestjs/common';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { Item } from './entities/item.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneItemArgs } from './dto/args/find-item.args';

@Injectable()
export class ItemsService {


  constructor(
    @InjectRepository(Item)
    private readonly itemsRepository: Repository<Item>) { }

  async create(createItemInput: CreateItemInput): Promise<Item> {
    const newItem = this.itemsRepository.create(createItemInput);
    return await this.itemsRepository.save(newItem);
  }

  async findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  async findOne(findOneItemArgs: FindOneItemArgs): Promise<Item> {
    return await this.itemsRepository.findOneBy({
      id: findOneItemArgs.id,
    }
    );
  }

  async update(id: string, updateItemInput: UpdateItemInput): Promise<Item> {
    const item = await this.itemsRepository.preload(updateItemInput);

    return await this.itemsRepository.save(item);
  }

  async remove(id: string) {
    const item = await this.itemsRepository.findOneBy({id});
     await this.itemsRepository.remove(item);

     return {...item, id}
  }
}
