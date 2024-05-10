import { randomUUID } from "crypto"

export class UniqueEntityID{
    protected id: string
    toString(){
        return this.id
    }
    toValeu(){
        return this.id
    }
    constructor(id?:string){
        this.id = id ?? randomUUID()
    }
    public equals(id:UniqueEntityID){
        return id.toValeu() === this.id
    }
}


