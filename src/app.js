import cors from "cors"
import express from "express"
import "express-async-errors"

import authRouter from "./routes/authRouter.js"
import financialRouter from "./routes/financialRouter.js"
import handleError from "./middlewares/handleError.js"

const app = express()
app.use(cors())
app.use(express.json())

app.use(authRouter)
app.use(financialRouter)

app.use(handleError)

export default app
