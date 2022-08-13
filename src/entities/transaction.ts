import { BaseEntity , PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn} from 'typeorm'
import { Client } from './clients'

export enum TransactionType {
    DEPOSIT = 'deposit',
    WITHDRAW = 'witHDraw',
}


@Entity()
export class Transaction extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        type: "enum",
        enum: TransactionType
    })
    type: string

    @Column({ 
        type: "numeric"
    })
    amount: number

    @ManyToOne(
        () => Client,
        client => client.transactions
    )

    @JoinColumn({
        name: "client_id",
    })
    client: Client
}
