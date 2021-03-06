# Chat en tiempo Real con Nodejs y Rethinkdb

Aplicación de chat en tiempo real, con la funcionalidad de trabajar con Rethinkdb, una base de datos
orientada a documentos, con su propio lenguaje de consultas llamada ReQL.


Este proyecto sirve también de prueba para trabajar en proyectos de manera remota, practicando comandos de GIT.


# Requisitos

Tener instalado NVM y node version 7.1.0.
``` 
 nvm install 7.1.0
 nvm use 7
```

Si quiere correr la aplicacion de manera local debe tener instalado Docker, para instalar docker puede
ir a [Docker Install](https://www.docker.com/products/overview).


La imagen de rethink para docker la puede descargar e instalar con el siguiente comando:
``` 
 docker pull rethinkdb 
```

para correr un contenedor docker con las configuraciones necesarias para correr la aplicacion, ejecúte el siguiente codigo:
```
 docker run -d -h 'hostname' -p 8080:8080 -p 6500:28015 -p 6501:29015 -v "/home/username/data:/data" -d rethinkdb
```

# App

Instalación de la aplicación paso a paso.
```
Clonar el proyecto mediante SSH
cd pruebaRemoto
npm  install
```

Para iniciar la aplicación:
```
nodemon index.js
```

Ir a la direccion: http://localhost:3000

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
