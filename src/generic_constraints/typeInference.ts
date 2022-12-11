/**
 * Lesson: Type Inference
 */

/**
 * TODO: Example 1
 */
type Unpacked<T> = ?

// type StringAndNumberUnpacked = string
type StringAndNumberUnpacked = Unpacked<string>
// Unpacked<string> => string
// Unpacked<number[]> => number


/**
 * TODO: Example 2
 */
type Swapped<T> = ?
// type StringNumberSwapped = [number, string]
type StringNumberSwapped = Swapped<[string, number]>;

