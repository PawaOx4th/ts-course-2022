/**
 * Lesson Generic Constraints
 */

function merge<U extends object, V extends object>(obj1: U, obj2: V) {
  return { ...obj1, ...obj2 }
}

const result = merge({ name: "JEEP" }, { age: 26 })
console.log(result)
