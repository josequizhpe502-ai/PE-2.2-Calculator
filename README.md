[Imagen de captura 1] ("https://github.com/josequizhpe502-ai/PE-2.2-Calculator/blob/3383db41ba40ebd1f1487e8ac356f3ed03a580f9/src/images/image2.png")

[Imagen de captura 2] ("https://github.com/josequizhpe502-ai/PE-2.2-Calculator/blob/3383db41ba40ebd1f1487e8ac356f3ed03a580f9/src/images/image.png")

[Imagen de captura 3] ("https://github.com/josequizhpe502-ai/PE-2.2-Calculator/blob/3383db41ba40ebd1f1487e8ac356f3ed03a580f9/src/images/division%20por%200.png")

[Imagen de captura 4] ("https://github.com/josequizhpe502-ai/PE-2.2-Calculator/blob/3383db41ba40ebd1f1487e8ac356f3ed03a580f9/src/images/division.png")

[Imagen de captura 5] ("https://github.com/josequizhpe502-ai/PE-2.2-Calculator/blob/3383db41ba40ebd1f1487e8ac356f3ed03a580f9/src/images/multiply.png")

[Imagen de captura 6] ("https://github.com/josequizhpe502-ai/PE-2.2-Calculator/blob/3383db41ba40ebd1f1487e8ac356f3ed03a580f9/src/images/substract.png")

[Imagen de captura 7] ("https://github.com/josequizhpe502-ai/PE-2.2-Calculator/blob/3383db41ba40ebd1f1487e8ac356f3ed03a580f9/src/images/add.png")


## Reporte de Cobertura

Se ejecutó el comando:

```bash
npm test  
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------

npm test -- --coverage
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------

En todos los resultados salio 0% ya que esta practica en si nos basamos en la validacion de un esquema ya definido en el archivo.json, y en sí este no tiene codigo ejecutable. En conclusion al no existir esto, pues jest solo mide la cobertura sobre acrhivos y aparecera en 0%. ESO ES TODO GRACIAS.

# Para ver esto de otra manera ya como sale teniendo funciones y codigo ejecutable, pues ocupamos la de calculator.routes.ts

producto.routes.test.ts
----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------------|---------|----------|---------|---------|-------------------
All files             |   95.65 |    88.88 |     100 |   95.65 |                   
 calculator.routes.ts |   95.65 |    88.88 |     100 |   95.65 | 61-63                
----------------------|---------|----------|---------|---------|-------------------   

Test Suites: 3 passed, 3 total
Tests:       19 passed, 19 total
Snapshots:   0 total
Time:        3.571 s
Ran all test suites.

statements salio 95.65%: este en si mide cuantas sentencias de código han sido ejecutadas al menos una vez en este test.
*pero como salio 95.65% quiero decir que  un pequeño bloque no fue alcanzado por los test

Branch 88.88%: Este esvalua las ramas lógicos del codigo: if , else , switch , case. cada posible camino cuenta como una rama
* En este caso igual falto una pequeña parte

functions 100%: este en si mide las funciones que ya fueron declaradas y si fueron llamdas durante los tests.
* En este caso todas las funciones fueron ejecutadas, no hubo funcion sin test.

lines 95.65: mide las lineas del codigo ejecutadas
* Casi todas igual fueron ejecutadas.


uncovered Line #s: esta muestra las lineas no ejecutadas en este caso de la 61 a la 63
