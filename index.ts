import express, { Express } from 'express'
import dotenv from 'dotenv'

import catRoutes from './cats/routes/cats.routes'
import rabbitRoutes from './rabbits/routes/rabbits.routes'

dotenv.config()

const app: Express = express()
const port = 7070

/* Routes */
app.use('/cats', catRoutes)
app.use('/rabbits', rabbitRoutes)

app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))