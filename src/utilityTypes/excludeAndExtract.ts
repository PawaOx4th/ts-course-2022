/**
 * Lesson Exclude and Extract
 */

/**
 * @description Exclude.
 * DESC : Exclude => <A | B> => Check B<member> is not in A
 * DESC : !(B<member> in A<member>)
 * NOTE: type MyExclude<T,U> = T extends U ? never : T
 */

type A = "name" | "age" | "gender"
type B = "name" | "age"
type MyExclude<T, U> = T extends U ? never : T
type Dummy = Exclude<A, B>

/**
 * @description Extract.
 * DESC : Extract => <A | B> => Check B<member> in A
 * DESC : B<member> in A<member>
 * NOTE: type MyExclude<T,U> = T extends U ? T : never
 */
type MyExtract<T, U> = T extends U ? T : never
type DummyExclude = Extract<A, B>
