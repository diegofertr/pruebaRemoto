# pruebaRemoto
prueba para trabajar en proyectos de manera remota, practicando comandos de GIT
Tener instalado NVM y node version 7.1.0
Tener instalado Docker, ademas de la imagen de rethink con:

``` 
 docker pull rethinkdb 
```

para correr un contenedor docker con las configuraciones necesarias para correr la aplicacion, aqui esta el siguiente codigo:

```
 docker run -d -h 'hostname' -p 8080:8080 -p 6500:28015 -p 6501:29015 -v "/home/username/data:/data" -d rethinkdb
```

Instalacion de la aplicacion paso a paso.
Paso1.

```
Clonar el proyecto mediante SSH
cd pruebaRemoto
npm  install
```

Primarios.-
Tener configurado la clave ssh


```
git clone "repositorio"
realizar cambios respectivos en el proyecto
git add .   -> para anhiadir los cambios hechos en un fichero o directorio especifico 
git commit  -> para poner mensajes de ayuda en cada cambio que se haga
git push    -> para subir cambios al repositorio
git pull    -> para jalar los cambios en el repositorio
```

Para jalar los cambios git pull


Nota- En config.json se recomienda cambiar la direccion de localhost, por algun servidor que se tenga,
o de todas formas cambiarlo a "localhost" para correr la aplicacion de manera local.
