# README Entrega semana 5

## Grupo 12
- Leonardo Barrios 
- Juan David Calderon 
- Sneyder Amado 
- Luis Alberto Cortes

## Funcionalidades cubiertas
- Inicio de sesion.
- Post.
- Tags.
- Pages.
- Sytaff
- General settings

## Escenarios de pruebas. Aplican para Kraken y Cypress

1. Inicia sesion, crear un post y lo publica y valida que se adiciona a lista de post publicados.
2. Inicia sesion, crear un post programado (scheduled) y valida que se adiciona a lista de post scheduled.
3. Inicia sesion, crear un borrador de post y valida que se adiciona a lista de post scheduled.
3. Inicia sesion, crear un post y lo publica, lo selecciona de lista de post, le modifica title y el texto secuandario y valida que este en la lista con los valores actualizados.
4. Inicia sesion, crear un post y lo publica, lo selecciona de lista de post, lo elimina y valida que ya no este en el listado.

5. Crear page.
6. Crear page programada.
7. Eliminar pagina.
8. Editar page.
9. Filtrar pages.

10. 
11. 
12. 
13. 
14. 
15. 
16. 
17. 
18. 
19. 
20. 


# Instrucciones para ejecutar tests - Kraken

## Dependencias
* Tener instalado Cypress V 12.9.0. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0
* Tener instalado Kraken . Remitir al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0
* Tener instalado Ghost. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0
  Para Ghost se utilizo la version 3.41.1, en caso de utilizar docker, se puede utilizar la imagen ejecutando el siguiente comando docker pull ghost:3.41.1
* Node V 14.21.3
* Faker V. Ejecutar en la terminal el siguiente comando. npm install @faker-js/faker --save-dev
* Chai V. Ejecutar en la terminal el siguiente comando.npm install chai 

```
## Archivos de configuracion credenciales ingreso a Ghost. 
* Kraken. Desde la raiz del proyecto, en el archivo properties.json configurar los valores para Usuario1 y Password1
* Cypress. Desde la raiz del proyecto, en la siguiente ubicacion. config\config.json modificar los valores para host, Usuario1, password1


# Ejecución de las pruebas
##Kraken
Desde la carpeta raiz del proyecto de Kraken ......   :
En la carpeta features\Escenarios_completos se encuentran los archivos .feature correspondients a los casos de prueba.
Para su ejecucion, de la carpeta features\Escenarios_completos mover el escenario deseado. 
desde la raiz del proyecto Kraken ejecutar el comando ./node_modules/kraken-node/bin/kraken-node


##Cypress

Abrir cypress con el comando cypress open


```
npm install
```
Una vez node instale todas las dependencias, ejecute el comando 
```
.node_modules/kraken-node/bin/kraken-node run
```
Verá que comienza la ejecución de las pruebas en Kraken. Tras la finalización de la ejecución, verá dentro de la carpeta `screenshots`, los pantallazos tomados por Kraken para cada uno de los pasos, en cada uno de los escenarios.

## Comparación de screenshots
Para comparar los screenshots generados en los escenarios de las dos versiones, ubíquese en el directorio `/resemble_compare`r Dentro del archivo `config.json` asegúrese que los valores de `v3Directory` y `v4Directory` coincidan con la ubicación de los screenshots que desea comparar (por defecto apuntan a la ubicación de los pantallazos generados por kraken para las dos versiones de ghost usadas); si no coinciden, modifíquelos para que sean coincidentes. Tras esto, ejecute en consola en consola los comandos:

``` 
npm install
node index.js
```
Esto ejecutará resemble, y creará un reporte con las diferencias encontradas entre los pantallazos dentro de la carpeta results, en un subdirectorio creado según la fecha y hora de ejecución. Dentro del repositorio podrá encontrar el último reporte generado por el equipo tras ejecutar las pruebas (`resemble_comparer/results/2022-05-16T04.15.18.653Z/report.html`).

![imagen](https://user-images.githubusercontent.com/98656893/168519574-3bac86ae-cc2f-40cd-86a0-e14a0fb18aec.png)

# Instrucciones para ejecutar tests - Cypress

[Intrucciones para ejecución con Cypress](https://github.com/miso-alejosaur/e2e-testing/wiki/Instrucciones-VRT-con-Cypress-y-Resemble.js)

## Instalación - Versión de Ghost
Para la creación de estos test, se usó la versión 4.42.0 de Ghost; para ejecutar esta versión, ubíquese mediante consola en el directorio donde tenga instalado Ghost, y ejecute los siguientes comandos:
```
ghost uninstall
ghost install 4.42.0 -local
```
Cuando la instalación finalice, se iniciará la ejecución de Ghost en `http://localhost:2368`, en caso que inicie en otro puerto o dirección, modifiquelo en el archivo `kraken/3.42/properties.json o kraken/4.44/properties.json` según corresponda, en la propiedad HOST.
## Configuración del sitio
Ingrese a la url http://localhost:2368/ghost/ (si su instancia de Ghost se ejecutó en otro puerto, úselo); allí encontrará un formulario para crear un nuevo Sitio en ghost. En los campos "Site title" y "Full name" ingrese los datos que desee, en el campo "Email Address" ingrese `test@test.tt`, y en el campo "Password" ingrese `1234567890a.`. Estas son las credenciales configuradas en Cypress; en caso de configurar otra combinación de usuario y contraseña, será necesario que modifique estos datos en el archivo `/Cypress/cypress/resource/login.feature`.
![imagen](https://user-images.githubusercontent.com/98656893/167307021-8f72da03-575a-4cdc-89a5-50dcf7e8a2eb.png)
## Ejecución de las pruebas
Una vez creado el sitio, ubíquese mediante consola en el directorio `/Cypress` (perteneciente a este repositorio), y allí ejecute el comando 
```
npm install
```
Una vez npm instale todas las dependencias, ejecute el comando 

```
npm run test
```
Verá que comienza la ejecución de las pruebas en Cypress.
## Ubicación de los screenshots

```
e2e-testing/cypress/cypress/screenshots/resource
```

