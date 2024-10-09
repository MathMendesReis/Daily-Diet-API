import type { FoodModel } from "src/domain/food/model/FoodModel"
import { randomUUID }  from 'node:crypto';

export class UserModel{
 public get id(): string {
   return this._id;
 }
 public set id(value: string) {
   this._id = value;
 }
 public get foods(): FoodModel[] {
   return this._foods;
 }
 public set foods(value: FoodModel[]) {
   this._foods = value;
 }
 public get password(): string {
   return this._password;
 }
 public set password(value: string) {
   this._password = value;
 }
 public get email(): string {
   return this._email;
 }
 public set email(value: string) {
   this._email = value;
 }
 constructor(
   private _email: string,
   private _password: string,
   private _foods: FoodModel[] = [],
   private _id?: string
 ){
  this._id = _id ?? randomUUID()
 }
}