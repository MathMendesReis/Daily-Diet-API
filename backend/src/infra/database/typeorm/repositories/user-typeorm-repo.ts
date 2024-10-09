import { Repository } from 'typeorm';
import { User as UserEntity } from '../entity/User';
import { AppDataSource } from '@/datasource';
import type { IUserRepository } from 'src/domain/user/contratcs/user-repository';

export class UserTypeormRepo implements IUserRepository{
  private ormRepository: Repository<UserEntity>;

  constructor(){
    this.ormRepository = AppDataSource.getRepository(UserEntity);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.ormRepository.find();
  }

  async findById(id: string): Promise<UserEntity | null> {
    return await this.ormRepository.findOneBy({ id });
  }
  async findByEmail(email: string): Promise<UserEntity | null> {
    return await this.ormRepository.findOneBy({ email });
  }

  async create(data: Partial<UserEntity>): Promise<UserEntity> {
    const entity = this.ormRepository.create(data);
    return await this.ormRepository.save(entity);
  }

  async update(id: string, data: Partial<UserEntity>): Promise<UserEntity | null> {
    await this.ormRepository.update(id, data);
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }
}
