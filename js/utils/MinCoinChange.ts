// 给出要找零的钱数， 以及可用的硬币面额d1…dn及其数量，找到所需的少的硬币个数。 
export class MinCoinChange {
  // 可用硬币面额
  private coins: number[]
  // 缓存
  private cache: any

  constructor(coins: number[]) {
    this.coins = coins.sort((a, b) => a - b)
    this.cache = {}
  }

  // 寻找最少找零个数
  makeChange (amount: number): number[] {
    // 如果 amount 为 0, 直接返回空
    if(!amount) {
      return []
    }
    
    // 如果存在缓存,返回缓存
    const cached = this.cache[amount]
    if(cached) {
      return cached
    }

    // 目前保存的找零最少个数
    let min: number[] = []
    // 新的找零最少个数
    let newMin: number[]
    // 循环所有方案
    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i]
      const newAmount = amount - coin
      // 防止出现越界值
      if(newAmount >= 0) {
        newMin = this.makeChange(newAmount)
        // 如果有更少个数找零 或 第一次进入
        if(newMin.length < min.length - 1 || !min.length) {
          // 设置最少找零个数并缓存
          this.cache[amount] = min = [coin, ...newMin]
        }
      }
    }

    return min
  }
}