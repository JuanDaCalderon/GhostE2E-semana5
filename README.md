# README Entrega semana 5

## Grupo 12
- Leonardo Barrios 
- Juan David Calderon 
- Sneyder Amado 
- Luis Alberto Cortes

## URL repositorio github
https://github.com/JuanDaCalderon/GhostE2E-semana5


## Funcionalidades cubiertas
- Inicio de sesion.
- Post.
- Tags.
- Pages.
- Staff
- General settings

## Escenarios de pruebas. Aplican para Kraken y Cypress

1. Inicia sesion, crear un post y lo publica y valida que se adiciona a lista de post publicados.
2. Inicia sesion, crear un post programado (scheduled) y valida que se adiciona a lista de post scheduled.
3. Inicia sesion, crear un borrador de post y valida que se adiciona a lista de post scheduled.
4. Inicia sesion, crear un post y lo publica, lo selecciona de lista de post, le modifica title y el texto secuandario y valida que este en la lista con los valores actualizados.
5. Inicia sesion, crear un post y lo publica, lo selecciona de lista de post, lo elimina y valida que ya no este en el listado.

6. Crear page, Crea una página y la publica despues se valida que haya sido creada correctamente.
7. Crear page programada, Crea una página y la programa, despues se valida que esta programada.
8. Eliminar pagina, Se crea una página, se valida que se creo y despues se elimina, para por ultimo validar que se elimino.
9. Editar page, Se crea una página y despues se edita la descripción de la misma.
10. Filtrar pages, Se crean tres páginas; Publicada, Agendada, y en borrador, despues se filtrar por borradores y se valida que este filtrada.

11. Iniciar sesión, crear tag y validar la correcta creación de este tag.
12. Iniciar sesión, crear tag, validar la correcta creación, entrar al tag, editar el tag, guardar los cambios y validar la correcta ejecución del escenario.
13. Iniciar sesión, crear tag, validar la correcta creación, entrar al tag, eliminar el tag y validar la correcta ejecución del escenario.
14. Iniciar sesión, crear tag, validar la correcta creación, crear un post, entrar al post, asociar el tag y validar la correcta ejecución del escenario.
15. Iniciar sesión, crear tag, validar la correcta creación, dar clic en la pestaña de internal tags y validar la correcta ejecución del escenario.

16. inicia sesion, se va a la seccion de staff click en el boton "invite people" y se hace invitacion al usuario
17. inicia sesion, se va a la seccion de staff click en el usuario y se edita la informacion del usuario
18. inicia sesion, se va a la seccion de staff, se invita al usuario, se recarga la pagina y se da clik en el boton "Revoke" del usuario invitado
19. inicia sesion, se va a la seccion de Setings en General , se da click en el boton "Expand" y se edita la informacion general de Titulo y descripcion
20. inicia sesion, se va a la seccion de Setings en General , si da click en le boton de hacer publica o privada la pagina


# Instrucciones para ejecutar tests - Kraken

## Dependencias globales
* Tener instalado Cypress V12.9.0. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/cypress-tutorial/index.html#0
* Tener instalado Kraken. Remitir al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/kraken-web-testing-tool/index.html#0
* Tener instalado Ghost. Remitirse al tutorial del curso. https://thesoftwaredesignlab.github.io/AutTestingCodelabs/ghost-local-deployment/index.html#0
  Para Ghost se utilizo la version 3.41.1, en caso de utilizar docker, se puede utilizar la imagen ejecutando el siguiente comando docker pull ghost:3.41.1
* Node V14.21.3.


# Ejecución de las pruebas
## Kraken
Desde la carpeta raiz del proyecto, `kraken_ghost`  :
* Ejecutar el comando `npm install` para instalar las dependencias. 
* En caso no instalarse, las dependencias son: 
 - Faker V7.6.0. Ejecutar en la terminal el comando `npm install @faker-js/faker --save-dev`
 - Chai V4.3.7. Ejecutar en la terminal el comando `npm install chai`
* Desde la raiz del proyecto, en el archivo `properties.json` configurar los valores para Usuario1 y Password1
* En la carpeta `features\Escenarios_completos` se encuentran los archivos .feature correspondients a los casos de prueba.
* Para su ejecucion, de la carpeta `features\Escenarios_completos` mover el escenario deseado.Debe ser el unico en esta ubicacion.
* Desde la raiz del proyecto Kraken ejecutar el comando `./node_modules/kraken-node/bin/kraken-node run`

## Cypress
Desde la carpeta raiz del proyecto, `cypress_ghost`  :
* Ejecutar el comando `npm install` para instalar las dependencias
* En caso no instalarse, las dependencias son: 
 - Faker V7.6.0. Ejecutar en la terminal el comando `npm install @faker-js/faker --save-dev`
 - Chai V4.3.7. Ejecutar en la terminal el comando `npm install chai`
* Desde la carpeta raiz del proyecto de cypresss, en el archivo `.\cypress-ghost\config\config.json` configurar host, user y password
* Ejecutar el comando `cypress open` para abrir la consola de la aplicacion
* En la consola Adicionar el proyecto. Buscar la carpeta cypress-ghost descargada del repositorio github
  <img width="938" alt="agregar proyecto" src="https://user-images.githubusercontent.com/124101392/236691524-aa3a4466-a381-4126-992b-d9f663863a85.png">
* Ya se ve debe ver el proyecto, seleccionar cypress-ghost
![image](https://user-images.githubusercontent.com/124101392/236691843-b257f1a5-0f5e-47bd-8e2f-9781e49cf96a.png)
* Seleccionar E2E testing
![image](https://user-images.githubusercontent.com/124101392/236691572-a8561b8a-e8e2-4aa6-b7ec-25a44f11a4de.png)
* Seleccionar el navegador Chrome y hacer click en el boton Start E2E Testing in Chrome
![image](https://user-images.githubusercontent.com/124101392/236691553-aa01b58c-2099-47f2-8fbb-3ae422889d55.png)
* En la ventana se mostraran los archivos correspondientes a los casos de prueba.
![image](https://user-images.githubusercontent.com/124101392/236692105-1516e344-7398-47a9-8896-c0a39a4433aa.png)
* Elegir el que se desee ejecutar

## Pros y contras de las dos herramientas utilizadas

| Herramienta  | Pros | Contra |
| ------------- |-------------|------|
| Cypress      | Tiene funciones para la configuracion de los selectores de los elementos que hacen mas facil su implementacion. Ej: la funcion. contains     |No permite simular la interaccion con la aplicacion de mas de un usuario|
| | Genera de manera automatica el video de la ejecucion de las pruebas     ||
||Permite la ejecucion de las pruebas tanto en modo headless como headed|
||Posee una consola que permite hacer la inclusion de la carpeta del proyecto, la seleccion del navegador, elegir el tipo de prueba y seleccionar el escenario de prueba de manera grafica 
| Kraken      | Permite simular de interaccion de mas de un usuario  | Requiere la instalacion de aplicaciones adicionales como Android studio para su funcionamiento que hace que se mas compleja puesta en ejecucion |
||La inclusion del patron GivenWhenThen mediante el archivo .feature que permite el entedimiento de manera intuitiva por alguien que no este familiarizado con la programacion|No genera video de la ejecuion de las pruebas|
||La reutilizacion de codigo al hacer uso de steps que se pueden llamar multiples veces de manera facil |
||Los reportes generados son amigables y entendibles|
