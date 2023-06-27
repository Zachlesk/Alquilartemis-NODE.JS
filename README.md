Documentación de actividad Alquilartemis 

Creación de directorio backend
Almacenamiento de datos en la database

Iniciamos el npm (Node Package Manager) dentro del directorio "backend"

Instalamos el nombre del paquete express

Creamos el directorio de source en backend y dentro de la misma, estaran los controllers, la gestion de la db y las routes

Dentro de sources, a diferencia de estos directorios, se creará 3 archivos js que conforman lo siguiente:

    app.js --> contiene la aplicación

    index.js --> archivo que lanza la aplicación, donde convergen los elementos del programa

    config.js --> configurar base de datos

En la carpeta de backend, se crea el .env, que contiene las variables de entorno, en este caso, la conexion a la base de datos

Creamos una funcion arrow constante 

En el archivo, app,js, importamos nuestro framework express

Para que lo anterior funciona, hay que añadir el tipo module en el package.json para la modularización

A continuación, en el archivo app.js guardamos a express donde lo habiamos importado anteriormente, y de la misma manera, tenemos que exportarlo para poder usarlo en diferentes archivos

Seteamos el puerto en el archivo de app.js que será 5000

Nos movemos al index.js, para importar la constante app que contiene express

Lo sigueinte es que en una constante main, escuchamos la petición y obtenemos el puerto que seteamos anteriormente, que es 5000

Hay que volver al package.json, y en la parte de script, convertimos en el json un dev, que contendrá el index.js para que se lance, con antes de la ruta poniendo un node

Vamos a la terminal, y ubicandonos en la carpeta backend, damos un npm run dev para que reproduzca lo construido

Y tambien hay que instalar un paquete de nodemon, para que cuando ingresemos datos nuevos en nuestros archivos existan los cambipos y se lanza directamente al servidor 

------------------------------------------------------------

Hay que crear nuestra base de datos para llamar los datos que necesitos y las tablas requeridas en el sitema, en el trabajo, se requiere de una database llamada alquilartemis 

En las dependencias existentes en el package.json, hay dos tipos de dependencias, la primera que se instalaran los paquetes para el trabajo plano y el otro solo para la parte del desarrollo, y como ejemplo contenemos a nodemon

Para continuar con la configuración general de las rutas de categorias, creamos un archivo en el directorio de rutas llamado categorias.routes.js
 
En este archivo importamos al enrutador (router) que nos guiara al framework express que esta en el mismo

Almacenamos en una constante el Router que importamos previamente del framework express

Tomamos a router para obtener (get) por medio del endpoint la informacion mandada por el cliente

Hay que importar en la app la ruta de la categoria que estemos solicitando, en este caso usaremos 4 de las mismas

Con la app, usamos .use, que entiende la informacion que necesitemos, ya sea get, post, put, delete

Para gestionar un enrouter, lo ideal es crear un controller para la misma, asi que crearemos el archivo de controllers para trabajar en el enroutador que creamos en la app.js 

En este archivo, trabajamos, en este caso, los get que necesitamos trabajar, asignamos una constante para retornar una respuesta

Tenemos que exportar este controller para poder gestionarlos en nuestras routers, en este caso asignamos una constante llamada methodsHTTP, que contenga la constante que asignamos anteriormente como un get

La ruta no le corresponde las respuestas, esto le pertenece al controlador

Nos movemos al archivo de categoria.routes para importar los methods del controller para que podamos usar el enrutador por medio de la accion de get que hicimos en el controller

A la ruta, le asignamos el importamos el controller de methods y como este contenia la accion get, por medio de un punto, le asignamos el valor

Hay que tener en cuenta que en el app.use ubicado en app.js, hay que trabajar con diferentes routers, entonces asignaremos una ruta de "/api/"nombre que asignemos"/" de esta manera lo guiaremos a una diferente url dependiendo de lo que necesitemos

------------------------------------------------------------------------

Hay que instalar la dependencia de dotenv, para que lea nuestra informacion este segura en un archivo .env, asignando el HOST como localhost, que es el que usamos, asignamos la DATABASE, en este caso es alquilartemis, y asignamos el USER Y la PASSWORD del ordenador 

Nos digirigimos hacia el archivo config.js, para importar las configuraciones que asignamos en el archivo .env con ayuda de la dependecia de dotenv e invocarla para exportarla

Realmente se crea el archivo de .env  para que los datos no se publiquen y sean seguros, pero hay que justificarlos en el archivo de config, asi que con ayuda d ela dependencia, estableceremos las configuraciones con process.env.HOST,DATABASE,USER,PASSWORD en su caso respectivo, para dato siguiente exportarlo

Nos movemos para hacer la conexion con la base de datos a el directorio db que creamos anteriormente, y creamos un archivo llamado database.js 

Para gestionar y conectar a la base de datos, hay que instalar una dependencia llamada promise-mysql, por este modulo podemos conectarnos

En el archivo que creamos anteriormente de database.js, hay que importar el mysql por medio de la dependencia de promise-mysql

De la misma m anera, hay que importar la configuracion que creamos para tener los datos necesarios para la conexion, desde el archivo config.js

En el archivo, creamos una constante de conexion, para conectar mysql y gestionar su conexion mediante .createConnection y mandar los datos que creamos en el config, y lo hacemos especificando el valor, que en este caso de ejemplo sera host, luego como un json, ponemos la variable que importamos antes que era config y ponemos su valor, en este caso, config.host

Y para retornar esta conexion, creamos una arrow function para llamar la constante de conexion, para de igual manera exportarlo para usarlo en otros archivos

Hay que importar en los controllers la conexion que hicimos en el archivo de database.js

En los controllers, trabajamos en el get para traernos los datos de la base de datos, entonces, dentro de la funcion de get, ajustamos una constante de conexion y traemos lo que importamos anteriormente, y lo ejecutamos con los parentesis()

Como no sabemos el transcurso de tiempo que usará para conectarse la base de datos, hay que especificar un async y await para esperar esta conexion y no seguir un rumbo en desden

Dentro de la funcion get, ajustamos una constante de result, qeu tambien tendrá un await que contendra la constante que creamos antes de conexion con un .query que podemos usar por la dependencia de promise-mysql, para especificar un SELECT  "datos que requerimos" FROM "tabla"

Lo mandamos en formato json lo que estamos requiriendo con un res.json 

Hay que envolver en el controller, un try catch en caso tal de que existan errores en el mismo