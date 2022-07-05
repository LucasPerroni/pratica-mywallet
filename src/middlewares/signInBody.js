export default function signInBody(req, res, next) {
  const { email, password } = req.body

  if (!email || !password) {
    return res.sendStatus(422)
  }

  next()
}
