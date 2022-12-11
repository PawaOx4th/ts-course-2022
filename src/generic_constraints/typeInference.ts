/**
 * Lesson: Type Inference
 */

type Tar = string[]

/**
 * TODO: Example 1
 */
type Unpacked<T> = T extends (infer A)[] ? A : never

// type StringAndNumberUnpacked = string
type StringAndNumberUnpacked = Unpacked<string[] | number[]>
// Unpacked<string> => string
// Unpacked<number[]> => number

/**
 * TODO: Example 2
 */
type Swapped<T> = T extends [infer R extends boolean, infer D] ? [D, R] : never
// type StringNumberSwapped = [number, string]
type StringNumberSwapped = Swapped<[boolean, number]>
