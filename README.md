# PruebaGPTX
Prueba Tecnica y Teorica para GPTX

## Prueba Teorica:

### 1.- Está recibiendo dos flujos de datos de dos sensores de temperatura (2 observables que devuelven números enteros), ¿qué operador de RxJS utilizaría para recibir estos dos datos en la misma suscripción?
>Para este caso podemos usar el operador **combineLatest** ya que este combina los ultimos valores recibidos de los 2 observables en un solo flujo de datos. Esto claro asumiendo que no es necesario que los 2 observables estén mandando datos al mismo tiempo ya que este operador sólo necesita que uno de los observables envie datos. En el caso que quisiéramos que los 2 datos estén presentes al mismo tiempo podria ser un **forkJoin**.

### 2.- Si tiene dos llamadas al servidor y la segunda llamada depende de la primera, ¿cómo manejaría con RxJS esta secuencia de llamadas?
>Con un **concatMap**, ya que con esto podemos asegurar que se procesen las 2 llamadas al servidor de manera secuencial, respetando que la segunda llamada depende del resultado de la primera.

### 3.- Tengo en un servidor un archivo de texto que está en minúscula y ocupa 2GB en el disco duro, pero le solicitan que todo el archivo debe ser pasado a mayúsculas, ¿cómo lo haría?
>Usando las librerías **‘fs’** y **‘path’** para leer el archivo de texto procesar su contenido con la función **.toUppercase()** y despues escribir el contenido procesado en un archivo de texto nuevo.**

### 4.- Tiene un arreglo de strings los cuales deben ser filtrados por su longitud mayor a dos y a la vez convertidos a un array de enteros con la longitud de cada string, ¿cómo lo haría? 
Ejemplo de entrada y salida: 
**[“hola”, “mundo”, “es”, “una”, “prueba”] => [4, 5, 3, 6]**
>1.  Primero aseguramos que el tamaño del array no sea 0 y en caso de que sea si lo devolvemos tal cual.  
>2.  Definimos **‘intArray’** donde guardaremos la longitud de cada string en el arreglo original.    
>3.  Y después simplemente recorremos el arreglo y verificamos que cada elemento tenga una longitud mayor a 2 y de así serlo con la función **.push()** agregamos su longitud al nuevo arreglo.

### 5.- Tiene un arreglo de números, los cuales pueden ser o no repetidos, ¿cómo eliminaría los repetidos? ¿Cómo los ordenaría en forma ascendente?
 Ejemplo de entrada y salida: 
 **[1, 2, 5, 10, 8, 8, 1, 3, 4, 5] => [1, 2, 3, 4, 5, 8, 10]**
 >1.  Primero aseguramos que el tamaño del array sea mayor a 1 y en caso de que no sea así lo devolvemos tal cual sin procesar.
>2.  Después utilizamos la función **.sort((a,b) => a - b)** para así ordenarlo de manera ascendente y sea más fácil ubicar los números repetidos. Al final de este paso el arreglo se vera asi **[1,1,2,3,4,5,5,8,8,10]**
>3.  Definiremos la variable **k** de tipo numérico la cual representa la cantidad de números únicos en el arreglo, la definiremos con el valor de 1 porque al menos debe de haber un número único en el arreglo.
>4.  Recorreremos el arreglo (**nums**) ya ordenado de manera iterativa con ayuda de la variable **i** como índice y cada vez el valor **i** no sea igual al valor **i - 1** entonces se reemplaza el valor de **nums[k]** con el de **nums[i]** e incrementaremos el valor de **k** en 1. Al final de este paso el arreglo se vera asi **[1,2,3,4,5,8,10,8,8,10]**
>5.  Y por último con ayuda del ciclo while quitaremos el último elemento del arreglo usando la función **.pop()** hasta que el tamaño del arreglo sea igual a k. Al final de este paso el arreglo se verá así **[1, 2, 3, 4, 5, 8, 10]**.