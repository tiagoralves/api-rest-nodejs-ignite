import fastify from "fastify"
import cookie from "@fastify/cookie"
import crypto from 'crypto'
import { knex } from "./database";
import { env } from "./env";
import { transactionRoutes } from "./routes/transactions";

const app = fastify()

app.register(cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})

app.register(transactionRoutes)


app
.listen({
  //port:3333,
  port: env.PORT,
}).then(() => {
  console.log('HTTP Server running!')
})