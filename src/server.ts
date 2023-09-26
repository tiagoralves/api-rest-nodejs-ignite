import { app } from './app'
import { env } from './env'


app
.listen({
  //port:3333,
  port: env.PORT,
})
.then(() => {
  console.log('HTTP Server running!')
})