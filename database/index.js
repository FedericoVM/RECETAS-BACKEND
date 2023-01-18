const mongoose = require("mongoose");

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.URI_CONECTION_DATABASE),{
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        console.log("Database Conectada")
    } catch (error) {
        console.log(error)
        process.exit(1)//Mata al servicio y no quedara en bucle
    }
}

module.exports = conectarDB