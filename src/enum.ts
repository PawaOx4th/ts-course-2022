// export enum Choice {
//   A = "Ant",
//   B = "Bride",
//   C = "Cat"
// }

// function onCheck(param: Choice) {
//   switch (param) {
//     case Choice.A:
//       return "🐜"
//     case Choice.B:
//       return "🦜"
//     case Choice.C:
//       return "🙀"

//     default:
//       break
//   }
// }

// console.log("🌺 :", Choice.C)

// const myChoice = Choice.A
// const myChoice2 = Choice.B

// console.log("🔥 ONCHECK(PARAM) :", onCheck(myChoice2))

// Union
type A = number | boolean | "Ant"
const a: A = "111"

// Literal
type Choice = "Ant" | "Bride" | "Cat"
const myChoice2: Choice = "Ant"

const onCheck = (param: Choice) => {}
