interface ItemsTable {
  weights: number[]
  values: number[]
}

/**
 * @param  {number} capacity 背包容量
 * @param  {any} weights,values 物品重量与对应价值
 */
function knapSack(capacity: number, {weights, values}: ItemsTable): any {
  const n = values.length
  let i, w, a, b, kS: number[][] = [];
  
  for (i = 0; i <= n; i++) { //{1}   
    kS[i] = [];
  }

  for (i = 0; i <= n; i++) {
    for (w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) { //{2}       
        kS[i][w] = 0;
      }
      else if (weights[i - 1] <= w) { //{3}    
        a = values[i - 1] + kS[i - 1][w - weights[i - 1]];
        b = kS[i - 1][w];
        kS[i][w] = (a > b) ? a : b; //{4} 
      } else {
        kS[i][w] = kS[i - 1][w]; //{5} 
      }
    }
  }
  return kS[n][capacity]; //{6}
}

console.log(knapSack(5, {weights: [2, 3, 4], values: [3, 4, 5]}))