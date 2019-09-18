function fibonacci(num: number): number {
  if (num === 1 || num === 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

fibonacci(1) /* ?*/
fibonacci(2) /* ?*/
fibonacci(3) /* ?*/
fibonacci(4) /* ?*/
fibonacci(5) /* ?*/
fibonacci(6) /* ?*/
fibonacci(7) /* ?*/
