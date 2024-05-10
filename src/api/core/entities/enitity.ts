import { IEntity } from "../../domain/user/enterprise/contratcs/IEntity";
import { UniqueEntityID } from "./unique-id";

export class Entity implements IEntity {
  protected readonly id: UniqueEntityID;

  constructor() {
    this.id = this.createId();
  }

   createId(): UniqueEntityID {
    return new UniqueEntityID();
  }

  getId(): string {
    return this.id.toString();
  }
}

