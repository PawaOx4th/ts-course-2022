/**
 * Lesson NonNullable
 */

/**
 * @description NonNullable<T>
 * DESC: type MyNonNullable<T> = T extends null | undefined ? never : T
 */
type A = string | number | boolean | undefined | null

type Custom = NonNullable<A>
