import bcrypt from "bcrypt"

import authRepository from "../repositories/authRepository.js"

async function blockExistingEmail(email) {
  const existingUsers = await authRepository.getExistingAccount(email)

  if (existingUsers.rowCount > 0) {
    res.sendStatus(409)
  }
}

async function blockWrongPassword(email, password) {
  const { rows } = await authRepository.getExistingAccount(email)
  const [user] = rows

  if (!user || !bcrypt.compareSync(password, user.password)) {
    throw { type: "unauthorized", message: "Unauthorized login..." }
  }

  return user
}

const authServices = {
  blockExistingEmail,
  blockWrongPassword,
}

export default authServices
