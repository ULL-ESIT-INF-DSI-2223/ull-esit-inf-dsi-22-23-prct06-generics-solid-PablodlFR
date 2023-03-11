/**
 * Streamable interface implements searchs methods.
 */
export interface Streamable<T> {
  searchByYear(num: number): T[];
  searchByName(str: string): T[];
}
