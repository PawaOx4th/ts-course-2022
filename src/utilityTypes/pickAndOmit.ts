/**
 * Lesson : Pick and Omit
 */

type Person = {
  name: string
  age: number
  address: string
}

type MyPick = Pick<Person, "address">
//    type NameAndAge = {
//      name: string;
//      age: number;
// }
// TODO: type MyNameAndAge = MyPick<Person, "name" | "age">

type MyOmit = Omit<Person, "name">
// type MyAddress s = {
//      address: string;
// }
// TODO: type MyAddress = MyOmit<Person, "name" | "age">
