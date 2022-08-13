import { DataSource } from "typeorm"
import { Banker } from "./entities/banker"
import { Client } from "./entities/clients"
import express from "express"
import { Transaction } from "./entities/transaction"
import { createClientRouter } from "./routes/create_clients"


const app = express()

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "typeOrm",
    entities: [Client, Banker,Transaction ],
    synchronize: true,
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        app.use(express.json())
        app.use(createClientRouter)
        app.listen(8080, ()=>{
            console.log('Server are running in Port 8080');
            
        })
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })