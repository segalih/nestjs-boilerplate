import {
  Repository,
  FindOneOptions,
  FindManyOptions,
  DeepPartial,
} from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T> {
  constructor(private readonly repository: Repository<T>) {}

  // Find one by id
  async findOneById(id: number): Promise<T | undefined> {
    return this.repository.findOneBy({ id } as any);
  }

  // Find one with custom options
  async findOne(options: FindOneOptions<T>): Promise<T | undefined> {
    return this.repository.findOne(options);
  }

  // Find all with custom options
  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return this.repository.find(options);
  }

  // Create a new entity
  async create(entity: DeepPartial<T>): Promise<T> {
    const newEntity = this.repository.create(entity);
    return this.repository.save(newEntity);
  }

  // Update an existing entity
  async update(id: number, entity: Partial<T>): Promise<T> {
    // @ts-ignore
    await this.repository.update(id, entity);
    return this.findOneById(id);
  }

  // Delete an entity
  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
