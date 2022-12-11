/**
 * Lesson Recode<T>
 * NOTE: return Object
 * - Key an string | number | symbol.
 */

// DESC: type MyPerson = MyRecode<'name' | 'age', string>

export type KeyOfPerson = "name" | "age" | "address"
export type PatternPerson = Record<KeyOfPerson | "tel", string>
const person: PatternPerson = {
  address: "",
  age: "",
  name: "",
  tel: ""
}
