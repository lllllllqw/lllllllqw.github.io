import { denominations } from 'mock/index'

function makeChange(amount: number) {
  if (!amount) {
    return []
  }
  const change = [] as number[]
  let newAmount = amount
  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i]
    newAmount -= denomination
    if (newAmount >= 0) {
      makeChange(newAmount)
    }
    if (newAmount >= 0) {
      change.push(denomination)
      console.log(change)
    }
  }
  return change
}

makeChange(21) /* ?*/
