import { denominations } from 'mock/index'

function makeChange(amount: number) {
  const change = []
  let newAmount = amount
  while (newAmount !== 0) {
    for (let i = denominations.length - 1; i >= 0; i--) {
      const denomination = denominations[i]
      if (newAmount >= denomination) {
        newAmount -= denomination
        change.push(denomination)
        break
      }
    }
  }
  return change
}

makeChange(100) /* ?*/
makeChange(98) /* ?*/
makeChange(11) /* ?*/
makeChange(21) /* ?*/
