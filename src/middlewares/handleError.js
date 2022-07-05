export default function handleError(error, req, res, next) {
  if (error.type === "unauthorized") {
    return res.sendStatus(401)
  }

  return res.sendStatus(500)
}
