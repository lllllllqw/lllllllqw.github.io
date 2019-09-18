const towerA: number[] = [6, 5, 4, 3, 2, 1]
const towerB: number[] = []
const towerC: number[] = []

function move(n: number, fromArr: number[], toArr: number[], swapArr: number[]): void {
  if (n === 1) {
    toArr.push(fromArr.pop()!)
    return
  }

  move(n - 1, fromArr, swapArr, toArr)
  towerA
  towerB
  towerC
  move(1, fromArr, toArr, swapArr)
  towerA
  towerB
  towerC
  move(n - 1, swapArr, toArr, fromArr)
  towerA
  towerB
  towerC
}

move(towerA.length, towerA, towerB, towerC)
towerA
towerB
towerC

