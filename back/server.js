const app=require("./app")
const connectDatabase = require("./configuracion/database");
const cloudinary = require("cloudinary")

//Setear el archivo de configuración ////setear el archivo de configuracion (``, ``); node back/server.js , npm i nodemon --save-dev (esto para instalar nuevas dependencias)
const dotenv=require("dotenv");
const { connect } = require("mongoose");
dotenv.config({path: 'back/configuracion/configur.env'})

//configurar base de datos
connectDatabase();

//Configurar Cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//LAMEMOS AL SERVER
const server=app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})

//luego de ejecutar= npm i nodemon --save-dev "se debió crear unos paquetes" y dentro de package.json modificamos los valores de "scripts": {
 //   "test": "echo \"Error: no test specified\" && exit 1"}
//DESPUES DE MODIFICAR Y CREAR LOS NUEVOS= "start": "node back/server.js", "dev":"SET NODE_ENV=DEVELOPMENT& nodemon back/server", "prod":"SET NODE_ENV=PRODUCTION& nodemon back/server"
// EJECUTAMOS EL SGTE COMANDO "npm run dev" sin las comillas. 
// para arrancar el servidor = npm run dev
//Llamemos al server
