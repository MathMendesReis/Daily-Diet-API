import { UniqueEntityID } from "../../../../core/entities/unique-id";

export interface IEntity{
    getId(): string;
    createId(): UniqueEntityID
}


