import { Router } from "express"

import { signIn, signUp } from "../controllers/authController.js"

import signUpBody from "../middlewares/signUpBody.js"
import signInBody from "../middlewares/signInBody.js"

const authRouter = Router()

authRouter.post("/sign-up", signUpBody, signUp)
authRouter.post("/sign-in", signInBody, signIn)

export default authRouter
