/**
 * Lesson Generic Types กับ Type Aliases และ Interfaces
 */

function createObject<T>(keys: string[], value: T) {
  return keys.reduce((result, key) => ({ ...result, [key]: value }), {})
}

const result = createObject(["A", "B", "C"], 0)
