import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Client } from "./clients";
import { Person } from "./utils/person";


@Entity('Banker')
export class Banker extends Person{

    @Column({
        unique: true,
        length: 10
    })
    employe_number: string


    @ManyToMany(
        () => Client
    )

    @JoinTable({
        name: "banker_client",
        joinColumn: {
            name: "banker",
            referencedColumnName: 'id'
        },
        inverseJoinColumn:{
            name: "client",
            referencedColumnName:"id"
        }
    })

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string
} 