require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnectMysql } = require("./config/database");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = 3000; // Express debe usar un puerto diferente a MySQL

// Conectar a la base de datos antes de arrancar el servidor
dbConnectMysql()
    .then(() => {
        console.log("Base de datos conectada correctamente.");

        // RUTAS
        app.use("/api", require("./routes/"));

        // Iniciar el servidor después de conectar a MySQL
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`);
        });
    })
    .catch((error) => {
        console.error("Error al conectar a la base de datos:", error);
    });

