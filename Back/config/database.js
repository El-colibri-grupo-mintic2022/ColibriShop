const mongoose = require("mongoose");

//DB connection
const connectDatabase = () =>{
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Base de datos mongo conectada con el servidor: ${con.connection.host}`)
    })
}

module.exports = connectDatabase;