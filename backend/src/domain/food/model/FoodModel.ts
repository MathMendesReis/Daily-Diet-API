import type { UserModel } from "src/domain/user/model/user-model"
import { randomUUID }  from 'node:crypto';

export class FoodModel{
  public get id(): string {
    return this._id
  }

  public get user(): UserModel {
    return this._user
  }
  
  public get isDiet(): boolean {
    return this._isDiet
  }
  public set isDiet(value: boolean) {
    this._isDiet = value
  }
  public get date(): Date {
    return this._date
  }
 
  public get description(): string {
    return this._description
  }
  public set description(value: string) {
    this._description = value
  }
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value
  }
  constructor(
    private _name: string,
    private _description: string,
    private _date: Date,
    private _isDiet: boolean,
    private _user: UserModel,
    private _id?: string,
  ){
    this._id = _id ?? randomUUID()
  }

}