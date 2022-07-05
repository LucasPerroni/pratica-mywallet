import { Router } from "express"

import { getFinancial, getFinancialSum, postFinancial } from "../controllers/financialController.js"
import authValidator from "../middlewares/authValidator.js"

const financialRouter = Router()

financialRouter.post("/financial-events", authValidator, postFinancial)
financialRouter.get("/financial-events", authValidator, getFinancial)
financialRouter.get("/financial-events/sum", authValidator, getFinancialSum)

export default financialRouter
