/**
 * Lesson Exclude and Extract
 */

/**
 * @description Exclude.
 * DESC : Exclude => <A | B> => Check B<member> is not in A
 * DESC : !(A<member> in B<member>)
 * NOTE: type MyExclude<T,U> = T extends U ? never : T
 */

/**
 * @description Extract.
 * DESC : Extract => <A | B> => Check B<member> in A
 * DESC : A<member> in B<member>
 * NOTE: type MyExclude<T,U> = T extends U ? T : never
 */