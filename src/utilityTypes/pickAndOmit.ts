/**
 * Lesson : Pick and Omit
 */

type Person = {
  name: string
  age: number
  address: string
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
//    type NameAndAge = {
//      name: string;
//      age: number;
// }
type MyNameAndAge = MyPick<Person, "name" | "age">

type MyOmit<T, K extends keyof T> = MyPick<T, Exclude<keyof T, K>>
// type MyAddress s = {
//      address: string;
// }
type MyAddress = MyOmit<Person, "name" | "age">
