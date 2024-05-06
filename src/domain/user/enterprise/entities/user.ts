import { UniqueEntityID } from "../../../../core/entities/unique-id"


export class User extends UniqueEntityID{
    constructor(
        private name: string,
        private email: string,
    ) {
        super()
    }

    
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    setName(name:string):User{
        this.name = name
        return this
    }
    setEmail(email:string):User{
        this.email = email
        return this
    }
  
  }
