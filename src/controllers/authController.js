import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import authRepository from "../repositories/authRepository.js"
import authServices from "../services/authServices.js"

export async function signUp(req, res) {
  const { name, email, password } = req.body
  authServices.blockExistingEmail(email)

  const hashedPassword = bcrypt.hashSync(password, 12)
  await authRepository.createAccount(name, email, hashedPassword)

  res.sendStatus(201)
}

export async function signIn(req, res) {
  const { email, password } = req.body
  const user = authServices.blockWrongPassword(email, password)

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET
  )

  res.send({
    token,
  })
}
