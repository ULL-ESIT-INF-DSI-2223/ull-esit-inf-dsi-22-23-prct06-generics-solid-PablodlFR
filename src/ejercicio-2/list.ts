import { Listable } from "./listable";
/**
 * Generic class that implements lists and some of the most importants methods accoding to the interface "Listable".
 */
export class List<T> implements Listable<T> {
  constructor(private list: T[]) {}
  /**
   * The second list elements add at the end of first list.
   * @param list1 First list.
   * @param list2 Second list.
   * @returns The first list after the addition.
   */
  append(list: List<T>) {
    for (let i = 0; i < list.length(); i++) {
      this.list[this.length()] = list.list[i];
    }
    return this;
  }
  /**
   * Combine all elements in one list.
   * @param list Variable number of lists.
   * @returns List with all elements.
   */
  concatenate(...list: List<T>[]) {
    for (let i = 0; i < list.length; i++) {
      this.append(list[i]);
    }
    return this;
  }

  /**
   * Filter a list accondig to a callback.
   * @param callback Function we use to filter the list.
   * @returns the filtered list.
   */
  filter(callback) {
    const filteredList = new List([]);
    let j = 0;
    for (let i = 0; i < this.length(); i++) {
      if (callback(this.list[i])) {
        filteredList.list[j] = this.list[i];
        j++;
      }
    }
    return filteredList;
  }

  /**
   * Get the lits's length.
   * @returns the list's length.
   */
  length() {
    let i = 0;
    let result = 1;
    while (this.list[i + 1] != undefined) {
      result++;
      i++;
    }
    return result;
  }

  /**
   * Modify the list according to a callback.
   * @param callback The function that modify each element of the list.
   * @returns The modified list.
   */
  map(callback) {
    for (let i = 0; i < this.length(); i++) {
      this.list[i] = callback(this.list[i]);
    }
    return this;
  }

  /**
   * Reduce the whole list to una valor, according to a callback.
   * @param initialValor Initial valor of the accumulator.
   * @param accumulator Accumulator where keep the elements.
   * @param callback Function that apply the accumulator.
   * @returns The accumulator valor.
   */
  reduce(initialValor, accumulator, callback) {
    accumulator = initialValor;
    for (let i = 0; i < this.length(); i++) {
      accumulator = callback(accumulator, this.list[i]);
    }
    return accumulator;
  }

  /**
   * Reverse the order of the list.
   * @returns The reversed list.
   */
  reverse() {
    const reversedList = new List([]);
    let j = 0;
    for(let i = 1; i <= this.length(); i++) {
      reversedList.list[j] = this.list[this.length()- i];
      j++;
    }
    return reversedList;
  }

  /**
   * Call a function for each list's element.
   * @param callback Function that is called.
   */
  forEach(callback) {
    for(let i = 0; i < this.length(); i++) {
      callback(this.list[i]);
    }
    return true;
  }
}

const prueba = new List(["a", "b", "c"]);
const prueba2 = new List(["d", "e", "f"]);
const prueba3 = new List(["g", "h", "i"]);
const prueba4 = new List([1, 2, 3]);
const prueba5 = new List([1, 2, 3]);

console.log(prueba.append(prueba2));
console.log(prueba.concatenate(prueba2, prueba3));
console.log(prueba.filter(function(item) {
  return item > "f";
}));
console.log(prueba4.map(function(item){
  return item * item;
}));
let accumulator;
console.log(prueba5.reduce(0, accumulator, function(accumulator, item) {
  return accumulator + item;
}))
console.log(prueba.reduce("", accumulator, function(accumulator, item) {
  return accumulator + item;
}))
console.log(prueba.reverse());
prueba.forEach(function(item) {
  console.log(item);
});