## Node / typescript  

### Ejercicio 1:

-   Crear un servicio REST para la entrega de  _**patentes**_  y/o ID, compuesto por:  
    1. un endpoint donde se ingrese una patente y este retorne el ID asociado a la patente.  
    1. un endpoint donde se ingrese el ID y este retorne la patente.  
    
-   El dominio de las patentes corresponde al siguiente: [AAAA000, AAAA001, …, ZZZZ999], el ID es secuencial, comienza en 1  
    
Entonces: AAAA000 tiene ID =1, AAAA001 tiene ID = 2 y sucesivamente.
Se excluye del dominio letra Ñ.


### Para ejecución

El proyecto contiene 3 clases fundamentales:
1. src/index.js
2. src/app.js
3. src/routes/index.js


Para instalar dependencias
**npm install**


Para ejecutar el proyecto
**node .\src\index.js**


Una vez ejecutado y corriendo el proyecto, se puede usar Postman o cualquier navegador web para probar.  


Con la url **http://localhost:3000/api/patente/10002**
Retorna:	**{ "patente": "AAAK001" }**

Con la url **http://localhost:3000/api/idpatente/AAAK001**
Retorna:	**{ "id_patente": "10002" }**