# Chat en tiempo Real - with Node and Rethinkdb

Aplicación de chat en tiempo real, con la funcionalidad de trabajar con Rethinkdb, una base de datos
orientada a documentos, con su propio lenguaje de consultas llamada ReQl.


Este proyecto sirve también de prueba para trabajar en proyectos de manera remota, practicando comandos de GIT.


# Requisitos

Tener instalado NVM y node version 7.1.0..
Tener instalado Docker, ademas de la imagen de rethink con:

``` 
 docker pull rethinkdb 
```

para correr un contenedor docker con las configuraciones necesarias para correr la aplicacion, aqui esta el siguiente codigo:

```
 docker run -d -h 'hostname' -p 8080:8080 -p 6500:28015 -p 6501:29015 -v "/home/username/data:/data" -d rethinkdb
```

# App

Instalacion de la aplicacion paso a paso.
Paso1.

```
Clonar el proyecto mediante SSH
cd pruebaRemoto
npm  install
```

Para iniciar la aplicacion:
```
nodemon index.js
```

Ir a la direccion: http://192.168.28.237:3000

O configurar en config.json, y cambiar la direccion por localhost, si quiere correrlo de manera local.


# Git

Tener configurado la clave ssh

```
git clone "repositorio"   -> Nos sirve para clonar un repositorio mediante SSH
git add .   -> para añadir los cambios hechos en un fichero o directorio especifico. 
git commit  -> para poner mensajes de ayuda en cada cambio que se haga.
git push    -> para subir cambios al repositorio, por defecto se suben a la rama master.
git pull    -> para jalar u obtener los cambios que se hicieron en el repositorio.
```

# Servidor o localhost
Nota- En config.json se recomienda cambiar la direccion de localhost, por algun servidor que se tenga,
o de todas formas cambiarlo a "localhost" para correr la aplicacion de manera local.
