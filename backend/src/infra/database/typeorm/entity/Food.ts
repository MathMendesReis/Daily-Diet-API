import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import  { User } from "./User"

@Entity()
export class Food {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type:'varchar'})
    name: string

    @Column({type:'varchar'})
    description: string

    @Column({ type: 'timestamptz' })
    date: Date
    @Column({ type: 'timestamptz',nullable:true })
    update: Date

    @Column({type:'boolean'})
    isDiet: boolean

    @ManyToOne(() => User, (user) => user.id)
    user: User

}
