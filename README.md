# Práctica 6 - Clases e interfaces genéricas. Principios SOLID
Esta práctica se basa en la realización de dos ejercicios relacionados con las clases e interfaces en TypeScript. Además se mostrará el ejercicio realizado en la hora de prácticas (PE101).
## Ejercicios de clase
### Ejercicio 1
El ejercicio propuesto en clase consiste en la creación de varias interfaces (_Printable_ y _Collectable_) que es implementada por la clase abstracta _PrintableCollection_, la cual a su vez es heredada por las clases _NumericPrintableCollection_ y _StringPrintableCollection_. Estas clases nos permiten crear una colección (array) de un tipo genérico, concretando el tipo en las dos subclases.
\
\
Las interfaces y clases mencionadas anteriormente son las siguientes:
\
\
_Printable_:
```TypeScript
/**
 * Printable interface implements one method: 
 */
export interface Printable<T> {
  print(): string;
}
```
_Collectable_:
```TypeScript
/**
 * Collectable interface to implements collections of items(array).
 */
export interface Collectable<T> {
  addItem(item: T): boolean;
  getItem(index: number): T;
  removeItem(index:number): T;
  getNumberOfItems(): number;
}
```
_PrintableCollection_:
```TypeScript
/**
 * Abstract class that implements Collectable and Printable interfaces. Represents an items collections.
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable<T> {
  constructor(protected items: T[]) {
  }

  /**
   * Add item to the collection (array).
   * @param newItem Item to be added to the collection.
   */
  addItem(newItem: T){
    this.items.push(newItem);
    return true
  }

  /**
  * Get item from the collection (array).
  * @param index The index's item that will be returned.
  * @returns The selected item.
  */
  getItem(index: number): T {
    if (index >= 0 && index < this.items.length) {
      return this.items[index];
    } else {
      console.log("El índice no se encuentra dentro del array.");
    }
  }

  /**
   * Remove item from the collection (array).
   * @param index The index's item that will be removes.
   * @returns The removed item.
   */
  removeItem(index: number): T {
    if (index >= 0 && index < this.items.length) {
      const removed = this.items[index];
      this.items.splice(index, 1);
      return removed;
    } else {
      console.log("El índice no se encuentra dentro del array.");
    }
  }

  /**
   * Get the numbers of items from the collection (array).
   * @returns The number of items.
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Print the collection (array).
   */
  abstract print(): string;
}
```
_NumericPrintableCollection_:
```TypeScript
/**
 * Numeric collection (array) that extends from PrintableCollection.
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  constructor(items: number[]){
    super(items);
  }

  /**
   * Print the numeric collection (array).
   * @returns String with the numbers separated by commas.
   */
  print(): string {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      if ( i < this.items.length - 1) {
        str += this.items[i].toString() + ", ";   
      } else {
        str += this.items[i].toString();   
      }         
    }
    return str;
  }
}
```
_StringPrintableCollection_:
```TypeScript
/**
 * String collection (array) that extends from PrintableCollection.
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  constructor(items: string[]){
    super(items);
  }

  /**
   * Print the strings collection (array).
   * @returns String with the strings separated by commas.
   */
  print(): string {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      if ( i < this.items.length - 1) {
        str += this.items[i] + ", ";   
      } else {
        str += this.items[i];   
      }         
    }
    return str;
  }
}
```
La clase abstracta _PrintableCollection_ implementa una colección basada en un array que implementa una serie de métodos muy útiles a la hora de gestionar una colección:
* addItem() -> Añade un objeto a la colección pasado por parámetro.
* getItem() -> Devuelve un objeto de la colección según el índice pasado por parámetro.
* removeItem() -> Elimina un objeto de la colección según el índice pasado por parámetro.
* getNumberOfItems() -> Devuelve el número de objetos que componen la colección.
Se declara el método print() como abstracto ya que es obligatorio al implementar la interfaz _Printable_ y está es implementada en las subclases, devolviendo en forma de cadena separadas por comas todos los elementos de la colección.
## Ejercicios guion
### Ejercicio 1 - DSIflix
### Ejercicio 2 - Implementación de una lista y sus operaciones
### Ejercicio 3 - Ampliando la biblioteca musical
## Conclusión
## Bibliografía