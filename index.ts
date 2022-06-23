import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

import catRoutes from './cats/routes/cats.routes'
import rabbitRoutes from './rabbits/routes/rabbits.routes'

dotenv.config()

const app: Express = express()
const port = 7070

app.get('/', (req: Request, res: Response) => {
    res.render('Im alive!')
})

/* Routes */
app.use('/cats', catRoutes)
app.use('/rabbits', rabbitRoutes)

app.listen(port, () => console.log(`⚡️[server]: Server is running at https://localhost:${port}`))