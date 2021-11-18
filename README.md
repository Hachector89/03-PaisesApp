# 03-PaisesApp

_Aplicación para aprender sobre rutas, RouterLink y RouterLinkActive, consumo de APIs y tipado de datos, llamando a una API externa (https://restcountries.com/)._

## Pre-requisitos:

Esta aplicación requiere Angular CLI v12 y Node v16 para su correcta ejecucíón

## Ejecución

En la consola de comandos, use `ng serve -o` para abrir ejecutar el proyecto y que se abra automáticamente una pestaña `http://localhost:4200/` en el navegador.

# App PaisesApp:

## Componente Sidebar

Muestra el menú de navegación a Buscar Pais, Buscar por Región y Buscar por Capital. Para ello usa un RouterModule junto a RouterLink y RouterLinkActive.

## Componente Pais Input

Elemento input que recibirá como Input un placeholder, y como devolverá como output dos eventEmitter, en función de si se pulsa enter para buscar, o solo se pulsan teclas para mostrar las sugerencias.

## Componente Pais Tabla

Componente encargado de mostrar los datos recibidos por Input en forma de tabla.

## Página Por Capital

Usando el componente Pais Input, podrá buscar la capital de un pais, realizando la correspondiente llamada a la API. Redirige al componente/página Ver Pais.

## Página Por Pais

Usando el componente Pais Input, podrá buscar la el pais, mostrando sugerencias al escribir, y posteriormente realizando la correspondiente llamada a la API. Redirige al componente/página Ver Pais.

## Página Por Región

Muestra una serie de regiones devueltas desde la API. Al pinchar en una de ellas, usa el componente Pais Tabla para mostrar los resultados de los paises que componen dicha región.

## Página Ver Pais

Recibiendo el id del pais via URL, realiza una llamada a la API para recibir los datos de dicho pais y mostrarlos en pantalla.

