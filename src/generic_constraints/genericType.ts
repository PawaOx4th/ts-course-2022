/**
 * Lesson Generic Types กับ Type Aliases และ Interfaces
 */

interface Dict<T> {
  [key: string]: T
}

function createObject<T>(keys: string[], value: T): Dict<T> {
  return keys.reduce((result, key) => ({ ...result, [key]: value }), {})
}

const result = createObject<number>(["A", "B", "C"], 0)
// NOTE: {A : 0, B: 0, C: 0}
