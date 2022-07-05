export default function signUpBody(req, res, next) {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.sendStatus(422)
  }

  next()
}
