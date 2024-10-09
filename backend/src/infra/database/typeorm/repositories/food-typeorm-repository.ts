import { Like, Repository } from 'typeorm';
import { AppDataSource } from '@/datasource';
import type { IFoodRepository } from 'src/domain/food/contracts/food-repositories';
import { Food as FoodEntity } from '../entity/Food';


export class FoodTypeormRepo implements IFoodRepository{
  private ormRepository: Repository<FoodEntity>;

  constructor(){
    this.ormRepository = AppDataSource.getRepository(FoodEntity);
  }
  async findByUserId(id: string): Promise<FoodEntity[] | null> {
   
    return await this.ormRepository.find({
      where:{
        user:{
          id
        }
      }
    });
  }

  async findAll(): Promise<FoodEntity[]> {
    return await this.ormRepository.find()
  }

  async findById(id: string): Promise<FoodEntity | null> {
    return await this.ormRepository.findOneBy({ id });
  }


  async create(data: Partial<FoodEntity>): Promise<FoodEntity> {
    const entity = this.ormRepository.create(data);
    return await this.ormRepository.save(entity);
  }

  async update(id: string, data: Partial<FoodEntity>): Promise<FoodEntity | null> {
    await this.ormRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
