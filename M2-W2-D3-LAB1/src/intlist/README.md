# IntList Interface

Este proyecto contiene dos implementaciones personalizadas de listas de enteros en Java:

- **IntArrayList**: Empieza con una capacidad de 10 elementos. Cuando se llena, su capacidad aumenta un 50%.
- **IntVector**: Empieza con una capacidad de 20 elementos. Cuando se llena, su capacidad se duplica (x2).

## ¿Cuándo usar cada uno?

### ✅ IntArrayList

- Si vas a trabajar con arrays pequeños o con inserciones esporádicas. Como el crecimiento es gradual (50%), se desperdicia menos memoria.
    - **Ejemplo**: una app donde solo agregas entre 10 y 30 elementos por sesión.

### ✅ IntVector

- Si sabes que vas a agregar muchos elementos rápidamente. Como duplica su tamaño, hace menos redimensionamientos y mejora el rendimiento en cargas grandes.
    - **Ejemplo**: procesar 10,000 datos de un archivo de golpe.


  ## Ejemplo de uso en código
  
  ```java
  IntList arrayList = new IntArrayList();

  for (int i = 0; i < 15; i++) {
    arrayList.add(i);
  }
  
  System.out.println("IntArrayList: agregamos 15 números (del 0 a 14), a un array que inicialmente tiene capacidad para 10 elementos, ¿Qué valor hay en la posición 12? => " + arrayList.get(12));

// --------------------------------- //
  
IntList vector = new IntVector();

  for (int i = 0; i < 25; i++) {
    vector.add(i);
  }

  System.out.println("IntVector: agregamos 25 números (del 0 a 24), a un array que inicialmente tiene capacidad para 20 elementos, ¿Qué valor hay en la posición 17? => " + vector.get(17));
```
  
 ## Conclusión

Tanto `IntArrayList` como `IntVector` son soluciones válidas para almacenar enteros, pero su eficiencia depende del contexto. Elegir la implementación adecuada permite optimizar tanto el rendimiento como el consumo de recursos según las necesidades de tu aplicación.