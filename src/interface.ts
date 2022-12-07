// interface PeopleMethod {
//   onGetName: () => string
//   onGetAge: () => number
// }

// interface PeopleEntity {
//   name: string
//   age: number
//   birthDate: string
//   tel: number
//   status: "single" | "marry"
//   email: string
//   onGetName: () => string
// }

// const people: PeopleEntity = {
//   name: "John",
//   age: 18,
//   birthDate: "2015-12-12",
//   status: "single",
//   tel: 12345678,
//   email: "john@example.com",
//   onGetName() {
//     return this.name
//   }
// }

// interface Fruits {
//   [index: number]: string
// }

// const a: Fruits = {
//   0: "apple",
//   1: "orange",
//   2: "banana"
// }

// const b: Fruits = ["apple", "orange", "banana"]

// const c = ["apple", "orange", "banana"]
// const d = [...c]

// d[0] = "🍎"

// console.log("🟡 C :", c)
// console.log("🟡 D :", d)

// import axios from "axios"

// export interface User {
//   userId: number
//   id: number
//   title: string
//   completed: boolean
// }

// type User2 = {
//   userId: number
//   id: number
//   title: string
//   completed: boolean
// }

// const onFethData = async () => {
//   const response = await axios.get<User[]>(
//     "https://jsonplaceholder.typicode.com/todos",
//     {
//       decompress: false
//     }
//   )
//   return response
// }

// onFethData().then((res) => console.log("🍉 :", res.data[0]))
