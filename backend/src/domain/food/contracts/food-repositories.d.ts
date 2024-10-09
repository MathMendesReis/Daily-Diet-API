import { Repository } from 'typeorm';
import { AppDataSource } from '@/datasource';
import type { Food as FoodEntity } from 'src/infra/database/typeorm/entity/Food';

export interface IFoodRepository {
  findAll(page?:string,limit?:string): Promise<FoodEntity[]> 
  findById(id: string): Promise<FoodEntity | null> 
  findByUserId(id: string): Promise<FoodEntity[]> 
  create(data: Partial<FoodEntity>): Promise<FoodEntity> 
  update(id: string, data: Partial<FoodEntity>): Promise<FoodEntity | null> 
  delete(id: string): Promise<void> 
}
