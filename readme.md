# Proyecto Final Backend NodeJS de CoderHouse

## Autenticación de Usuarios

### Dependencias implementadas

- mongoose,jsonwebtoken,multer, bcrypt,nodemailer,socket.io y winston

## API-Rest

### Framework Principal ==> Express

### Variable de entorno a Configurar

## en el archivo .env hay que configurar las distintas variables

- PORT=8080
- NODE_ENV=development
- BASE_HOST=http://localhost:8080
- MONGO_URL= //aca va el servidor de mongo o localhost
- TARGET=mongo
  -EMAIL_DESTINATARIO=// aca va el email del administrador  
  EMAIL= //aca va el email del servidor
  EMAIL_SERVICE=gmail //el servicio elegido es gmail
  EMAIL_PASS= // el pass de gmail
  TOKEN_TIME=24h // y el tiempo que dura el token

### PERSISTENCIAS

Solo se eligio mongoDb para este proyecto

### Rutas

en el repositorio se adjunta la coleccion de Postman
para hacer todas las pruebas

### Uso de Socket.IO

para los mensajes ademas de las rutas , se dejo preparado en el servido la coneccion por socket,

## Ejecutar en producción

```sh
npm start
```

## Ejecutar en desarrollo

```sh
npm run dev
```

### Pasos

- Desde postman registrarse y se envia mail
- luego hacer el login y guardar el token
- crear los productos
- los carritos se crean automaticamente cuando se crea un usuario cada usuario tiene un solo carrito
- se cargan los carritos con el id del carrito y el id del producto y la cantidad
- al crear la orden con el id del carrito se crea la orden y se vacia el carrito y se envia mail
- esta creada la ruta de los mensajes o se puede conectar un Front con socket

# Proyecto Final Backend NodeJS de CoderHouse

Este proyecto es una API REST implementada con Node.js, Express y MongoDB que permite la autenticación de usuarios, creación y gestión de productos, carritos y órdenes. También se incluye el uso de Socket.IO para la comunicación en tiempo real entre el servidor y el cliente.

## Dependencias implementadas

Se han utilizado las siguientes dependencias para implementar el proyecto:

- Mongoose: para la conexión y manejo de la base de datos MongoDB.
- Jsonwebtoken: para la autenticación de usuarios mediante tokens.
- Multer: para la gestión de archivos multimedia.
- Bcrypt: para el cifrado de contraseñas.
- Nodemailer: para el envío de correos electrónicos.
- Socket.io: para la comunicación en tiempo real.
- Winston: para la gestión de logs.
- Configuración
- Antes de ejecutar la aplicación, es necesario configurar algunas variables de entorno en el archivo .env, tales como:

- PORT: puerto en el que se ejecutará la aplicación.
- NODE_ENV: entorno de ejecución (development o production).
- BASE_HOST: host base de la aplicación.
- MONGO_URL: dirección del servidor de MongoDB.
- EMAIL_DESTINATARIO: correo electrónico del administrador.
- EMAIL: correo electrónico del servidor SMTP.
- EMAIL_SERVICE: servicio de correo electrónico.
- EMAIL_PASS: contraseña del servidor SMTP.
- TOKEN_TIME: tiempo de duración del token de autenticación.

### Persistencia

En este proyecto se ha elegido utilizar MongoDB como base de datos.

## Rutas

En el repositorio se adjunta una colección de Postman que contiene todas las rutas necesarias para probar la aplicación.

## Uso de Socket.IO

Se ha implementado Socket.IO para la comunicación en tiempo real entre el servidor y el cliente. La conexión por socket ya está preparada en el servidor.

## Ejecutar en producción

```sh
npm start
```

## Ejecutar en desarrollo

```sh
npm run dev
```

## Pasos

Para utilizar la aplicación, se deben seguir los siguientes pasos:

- Registrarse mediante una petición desde Postman. Se enviará un correo electrónico de confirmación.
- Iniciar sesión y guardar el token generado.
- Crear los productos necesarios.
- Los carritos se crean automáticamente cuando se crea un usuario. Cada usuario tiene un único carrito.
- Cargar los carritos con el id del carrito, el id del producto y la cantidad.
- Al crear una orden con el id del carrito, se generará una orden, se vaciará el carrito y se enviará un correo electrónico.
- Se ha creado una ruta de mensajes, que se puede conectar con un Front mediante Socket.IO.
