import { BaseEntity, Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Transaction } from "./transaction";
import { Person } from "./utils/person";
import { Banker } from './banker';


@Entity('clients')
export class Client extends Person {

   
    @Column({
        default: true,
        name: "active"
    })
    is_active: boolean

    @Column({
        type: "simple-json",
        nullable: true,
    })
    additional_info:{
        age: number
        hair_color: string
    }

    @OneToMany(
        () => Transaction,
        transaction => transaction.client
    )
    transactions: Transaction[]


    @ManyToMany(
        ()=> Banker
    )
    bankers: Banker[]

    @Column({
        type: "simple-array",
        default: []
    })
    family_member: string

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string
} 