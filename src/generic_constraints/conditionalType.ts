/**
 * Lesson Condition type
 * 
// NOTE: T extends U ? X : Y
 */

/**
 * TODO: Example 1
 */
type NumOrString = string[]

// type ArrayOnly = ?

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

// type Person = typeof person
// DESC: type PersonFunctionKeys = "getName" | "getAge"
// type PersonFunctionKeys = FunctionPropkeysePerbone<Person>
