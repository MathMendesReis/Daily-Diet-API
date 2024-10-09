import { FoodModel } from "src/domain/food/model/FoodModel";
import { Food } from "../entity/Food";
import { UserModel } from "src/domain/user/model/user-model";

export class FoodMappers {
  static toDomain(raw:Food){
    return new FoodModel(
      raw.name,
      raw.description ,
      raw.date ,
      raw.isDiet ,
      new UserModel(raw.user.email,raw.user.password),
      raw.id,
    )
  }
}
