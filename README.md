# Práctica 6 - Clases e interfaces genéricas. Principios SOLID
Esta práctica se basa en la realización de dos ejercicios relacionados con las clases e interfaces en TypeScript. Además se mostrará el ejercicio realizado en la hora de prácticas (PE101).
## Ejercicios de clase
### Ejercicio 1
El ejercicio propuesto en clase consiste en la creación de varias interfaces (_Printable_ y _Collectable_) que es implementada por la clase abstracta _PrintableCollection_, la cual a su vez es heredada por las clases _NumericPrintableCollection_ y _StringPrintableCollection_.
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


## Ejercicios guion
### Ejercicio 1 - DSIflix
### Ejercicio 2 - Implementación de una lista y sus operaciones
### Ejercicio 3 - Ampliando la biblioteca musical
## Conclusión
## Bibliografía