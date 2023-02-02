# Next.js TesloShopp App
Para correr localmente, se necesita la DB

```
docker-compose up -d
```
* El -d significa __detached__

MongoDB URL local: 

```
mongodb://localhost:27017/teslodb
```

## Cofigurar las variables de entorno
Renombrar el archivo __.env.template__ a __.env__

## Llenar la base de datos con información de pruebas

Llamará: 
```
http://localhost:3000/api/seed
```