import fastify from "fastify"
import cookie from "@fastify/cookie"

import { transactionRoutes } from "./routes/transactions";

export const app = fastify()

//middleware global de rota 
app.register(cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})