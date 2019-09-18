type OmitOwn<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}

type PartialOwn<T> = {
  [P in keyof T]?: T[P]
}

type ReadonlyOwn<T> = {
  readonly [P in keyof T]: T[P]
}

type MutableOwn<T> = {
  -readonly [P in keyof T]: T[P]
}

type ExcludeOwn<T, U> = T extends U ? never : T

type ExtractOwn<T, U> = T extends U ? T : never

type RequiredOwn<T> = {
  [P in keyof T]-?: T[P]
}

type ParamTypeOwn<T> = T extends (params: infer P) => any ? P : never

type ReturnTypeOwn<T> = T extends (params: any) => infer P ? P : never

type GetKeyFromValueType<T, CONDITION> = {
  [K in keyof T]: T[K] extends CONDITION ? K : never
}[keyof T]
