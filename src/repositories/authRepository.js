import connection from "../database.js"

async function getExistingAccount(email) {
  return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email])
}

async function createAccount(name, email, hashedPassword) {
  return connection.query(`INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`, [
    name,
    email,
    hashedPassword,
  ])
}

const authRepository = {
  getExistingAccount,
  createAccount,
}

export default authRepository
