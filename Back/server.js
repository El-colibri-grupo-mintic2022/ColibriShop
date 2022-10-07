const app = require("./app")

//seting configuration file 
const dotenv = require("dotenv");
dotenv.config({path: 'Back/config/config.env'})


//server
const server = app.listen(process.env.PORT, () => {
    console.log(`Servidor iniciado en el puerto: ${process.env.PORT} en modo: ${process.env.NODE_ENV}`)
})
