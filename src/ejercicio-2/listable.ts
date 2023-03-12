import { List } from "./list";
/**
 * Interface with the methods we need in a class that implements lists.
 */
export interface Listable<T> {
  append(list: List<T>): List<T>;
  concatenate(...list: List<T>[]): List<T>;
  filter(callback): List<T>;
  length(): number;
  map(callback): List<T>;
  reduce(initialValor, accumulator, callback);
  reverse(): List<T>;
  forEach(callback);
}