import financialRepository from "../repositories/financialRepository.js"

export async function postFinancial(req, res) {
  const { user } = res.locals

  const { value, type } = req.body

  if (!value || !type) {
    return res.sendStatus(422)
  }

  const financialTypes = ["INCOME", "OUTCOME"]
  if (!financialTypes.includes(type)) {
    return res.sendStatus(422)
  }

  if (value < 0) {
    return res.sendStatus(422)
  }

  await financialRepository.createFinancialEvent(user, value, type)

  res.sendStatus(201)
}

export async function getFinancial(req, res) {
  const { user } = res.locals

  const events = await financialRepository.getFinancialEvents(user)

  res.send(events.rows)
}

export async function getFinancialSum(req, res) {
  const { user } = res.locals

  const events = financialRepository.getFinancialEvents(user)

  const sum = events.rows.reduce(
    (total, event) => (event.type === "INCOME" ? total + event.value : total - event.value),
    0
  )

  res.send({ sum })
}
