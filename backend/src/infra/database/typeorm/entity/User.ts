import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Food } from "./Food"

@Entity()
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({unique:true,type:'varchar'})
    email: string

    @Column({type:'varchar'})
    password: string

    @OneToMany(() => Food, (photo) => photo.user)
    foods: Food[]


}
