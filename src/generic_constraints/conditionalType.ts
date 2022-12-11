/**
 * Lesson Condition type
 * 
// NOTE: T extends U ? X : Y
 */

/**
 * TODO: Example 1
 */
type NumOrString = string[] | number[] | boolean | undefined

type ArrayOnly<T> = T extends unknown[] ? T : never
type Dummy = ArrayOnly<NumOrString>

/**
 * TODO: Example 2
 */
const person = {
  name: "Somchai",
  age: 24,
  getName() {
    return this.name
  },
  getAge() {
    return this.age
  }
}

type Person = typeof person

type PersonFunctionKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

// DESC: type PersonFunctionKeys = "getName" | "getAge"
type PersonFunctionKeysResult = PersonFunctionKeys<Person>
