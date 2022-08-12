import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";


@Entity('clients')
export class Client extends BaseEntity{

    @PrimaryColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column({
        unique: true,
    })
    email: string

    @Column({
        unique: true,
        length: 10
    })
    card_number: string

    @Column({
        type: 'numeric',
    })
    balance: number

    @CreateDateColumn()
    created_at: string

    @UpdateDateColumn()
    updated_at: string
} 