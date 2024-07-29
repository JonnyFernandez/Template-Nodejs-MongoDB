## Dependencias que podrias necesitar

### Dependencias iniciales

```
npm i bcryptjs cookie-parser cors dotenv express jsonwebtoken morgan nodemon zod nodemailer swagger-ui-express swagger-jsdoc mongoose
```

- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) // Encriptaciones
- [Cookie-parser](https://www.npmjs.com/package/cookie-parser) // mejorar el formato de las cookies
- [Cors](https://www.npmjs.com/package/cors) // conexion con el front
- [Dotenv](https://www.npmjs.com/package/dotenv) // variables de entorno
- [Express](https://www.npmjs.com/package/express) // ¿Qué es la función Express?
  Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para: Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) // define un método compacto y autocontenido para la transmisión segura de información entre partes codificadas como un objeto JSON

- [Morgan](https://www.npmjs.com/package/morgan) // registrar solicitudes y respuestas HTTP
- [Nodemon](https://www.npmjs.com/package/nodemon) // monitorear cualquier cambio en su fuente de directorio y reiniciar automáticamente su servidor o aplicaciones
- [Zod](https://www.npmjs.com/package/zod) // es un una herramienta para validación de esquemas
- [Jest](https://jestjs.io/docs/getting-started) // crear, ejecutar y estructurar pruebas
- [Supertest](https://www.npmjs.com/package/supertest) // se encarga de que la aplicación que se está probando se inicie en el puerto que utiliza internamente
- [Nodemailer](https://nodemailer.com/) // te permite enviar emails desde tu servidor con facilidad
- [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) //una serie de reglas, especificaciones y herramientas que nos ayudan a documentar nuestras APIs
- [Swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc) // Transforma tus comentarios en el código fuente en documentación legible y estructurada para tus API

### DBMS

#### En caso que trabajes con MongoDB

- [Mongoose](https://www.npmjs.com/package/mongoose) // nos permite escribir consultas para una base de datos de MongooDB

### Comandos de mongo en base de datos (terminal mongosh)

- Crear Base de datos:

```
use store
```

- Crear colección:

```
db.createColection("prod")
```

- Ver todas las colecciones:

```
show collections
```

- Insertar datos a coleccción:

```
db.prod.insertOne({"name": "keyboard"})
```

- Listar documentos de una colección:

```
db.prod.find().pretty()
```

- Agregar varios documentos a una colección:

```
db.name-collection.insert([{"name":"mouse","descrip":"gaminig","tags":["computado", "gadsdsmi"], "create_at":new Date()},{"name":"monitor","descrio":"LG", "tags":["compu", "gami"], "create_at":new Date() }])
```

- Buscar documento por atributo:

```
db.prod.find({name:"mouse"})
```

- Buscar documentos por varios atributos:

```
db.prod.find({"tags":"compu", "name":"monitor"})
```

- Buscar y quedarme con el primero que me salga:

```
 db.prod.findOne({"tags":"computado"}
```

- Condicionar resultado:

```
db.prod.findOne({"tags":"computado"}, {"name":1, "descrip":1})
```

- Omitir id en el resultado:

```
db.prod.findOne({"tags":"computado"}, {"name":1, "descrip":1, "_id":0})
```

- Resultados ordenados alfabéticamente:

```
db.prod.find({"tags":"compu"}).sort({name:1})
```

- Limitar busqueda a cierta cantidad:

```
db.prod.find({"tags":"compu"}).limit(5)
```

- Contar cantidad de documentos en una colección:

```
db.prod.countDocuments()
```

- Jugamos un js:

```
db.prod.find().forEach(item=> print("Prod Name: " + item.name))
```

- Agregarle atributo a un documento:

```
db.prod.update({"price":99.99}, { $set: { "hobie":"chess" } })
```

- Agregarle varios atributo a un documento:

```
db.prod.update({"price":99.99}, { $set: { "hobie":"chess", "job":"lazi" } })
```

- Actualizando un atributo indefinido (findOrCreate):

```
db.prod.update({"name":"desktop"}, { $set: { "description":"gamin Desktop", "job":"lazi" }}, {upsert:true})
```

- Incrementar valor numerico a un atributo:

```
db.prod.update({"name":"keyboard"},{ $inc:{"price": 5} }) => aumentar
db.prod.update({"name":"keyboard"},{ $inc:{"price":-5} }) => restar
```

- Renombrar propiedades:

```
db.prod.update({"name":"mouse"},{$rename:{"name":"apodo"}})
```

- Eliminar documento de colección:

```
db.prod.remove({"name":"keyboard"})
```

- Eliminar todos los documentos de una colección:

```
db.prod.remove({})
```

#### En caso que trabajes con PostgreSQL

- [Sequelize](https://www.npmjs.com/package/sequelize) //es un ORM para Nodejs que nos permite manipular varias bases de datos SQL de una manera bastante sencilla, entre estas bases de datos podemos encontrar: mysql, sqlite, postgres, mssql
- [pg](https://www.npmjs.com/package/pg) // Sequelize proporciona la funcionalidad ORM y la interfaz para interactuar con tu base de datos, mientras que el paquete pg proporciona la conexión a la base de datos PostgreSQL y las funciones necesarias para ejecutar las consultas SQL generadas por Sequelize.

## Consultas a la DB

### Buscar prod por su codigo

- GET: `http://localhost:3001/api/prod/code/123`

### Buscar prod por su nombre

- GET: `http://localhost:3001/api/prod?name=pepe`

### Buscar prod por su id

- GET: `http://localhost:3001/api/prod/456`

### crear prod

- POST: `http://localhost:3001/api/prod/`

```
Envio por body la informacion
{
  "name":"Jhon travolta",
  "description":"lo que tu quieras",
  "code":"123456",
  "price":123456
}

```

### Actualizamos prod

- PUT: `http://localhost:3001/api/prod/2`

```
por body envio los cambios deseados
{
  "name":"Jhon travolta",
  "description":"lo que tu quieras",
  "code":"123456",
  "price":123456
}

```

### Remover prod

- DELETE: `http://localhost:3001/api/prod/2`

## Archivo .env

```
PORT = 3001
TOKEN_SECRET = agregar un UUID
USER_Gmail =
PASS_Gmail
```
