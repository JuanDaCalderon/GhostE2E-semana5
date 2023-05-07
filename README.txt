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
Desde la carpeta raiz del proyecto de Kraken_ghost  :
- Ejecutar el comando npm install para instalar las dependencias
- En la carpeta features\Escenarios_completos se encuentran los archivos .feature correspondients a los casos de prueba.
- Para su ejecucion, de la carpeta features\Escenarios_completos mover el escenario deseado.Debe ser el unico en esta ubicacion.
- Desde la raiz del proyecto Kraken ejecutar el comando ./node_modules/kraken-node/bin/kraken-node


##Cypress
Desde la carpeta raiz del proyecto de Cypress_ghost  :
- Ejecutar el comando <<npm install>> para instalar las dependencias
- Ejecutar el comando <<cypress open>> para abrir la consola de la aplicacion
- En la consolaAdicionar el proyecto. Buscar la carpeta cypress-ghost descargada del repositorio github
image.png
- Ya se ve debe ver el proyecto, seleccionar cypress-ghost
image.png
- Seleccionar E2E testing
image.png
- Seleccionar el navegador Chrome y hacer click en el boton Start E2E Testing in Chrome
image.png
- En la ventana se mostraran los archivos correspondientes a los casos de prueba.
image.png
- Elegir el que se desee ejecutar
