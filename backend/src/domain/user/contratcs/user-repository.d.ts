import { Repository } from 'typeorm';
import { User as UserEntity } from '../entity/User';
import { AppDataSource } from '@/datasource';

export interface IUserRepository {
  findAll(): Promise<UserEntity[]> 
  findById(id: string): Promise<UserEntity | null> 
  findByEmail(email: string): Promise<UserEntity | null> 
  create(data: Partial<UserEntity>): Promise<UserEntity> 
  update(id: string, data: Partial<UserEntity>): Promise<UserEntity | null> 
  delete(id: string): Promise<void> 
}
