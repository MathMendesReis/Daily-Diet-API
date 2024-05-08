import { UniqueEntityID } from "../../../../core/entities/unique-id"


export class User extends UniqueEntityID{
    constructor(
        private name: string,
        private email: string,
        private passwordHash: string,
    ) {
        super()
    }

    
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getPasswordHash(){
        return this.passwordHash
    }
    setName(name:string):User{
        this.name = name
        return this
    }
    setEmail(email:string):User{
        this.email = email
        return this
    }
    setPassword(passwordHash:string):User{
        this.passwordHash = passwordHash
        return this
    }
  
  }
