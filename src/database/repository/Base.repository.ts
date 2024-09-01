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

  // Find all with pagination
  async findAllWithPagination(
    page: number = 1,
    limit: number = 10,
    options?: FindManyOptions<T>,
  ): Promise<{ data: T[]; total: number; totalPages: number; offset: number }> {
    // Apply soft delete filter
    const where = {
      ...(options?.where || {}),
      deleted_at: null,
    };
    console.log({
      ...options,
      where,
      take: limit,
      skip: (page - 1) * limit,
    });
    // Use `findAndCount` with the filter applied
    const [data, total] = await this.repository.findAndCount({
      ...options,
      where,
      take: limit,
      skip: (page - 1) * limit,
    });

    // Calculate total pages
    const totalPages = Math.ceil(total / limit);

    // Calculate offset
    const offset = (page - 1) * limit;

    return { data, total, totalPages, offset };
  }
}
