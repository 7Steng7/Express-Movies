const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise'); // mysql2 con promesas

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "mysql",
});

// Función para ejecutar un archivo SQL antes de la conexión con Sequelize
const executeSQLFile = async (connection, filePath) => {
    try {
        const sql = fs.readFileSync(filePath, 'utf8');
        const statements = sql.split(/;\s*/); // Separar por punto y coma

        for (const statement of statements) {
            if (statement.trim()) {
                await connection.query(statement);
            }
        }

        console.log(`Archivo SQL ejecutado correctamente: ${filePath}`);
    } catch (error) {
        console.error(`Error ejecutando el archivo SQL: ${filePath}`, error);
    }
};

const dbConnectMysql = async () => {
    try {
        // 1. Crear una conexión temporal SIN base de datos
        const connection = await mysql.createConnection({
            host,
            user: username,
            password,
            multipleStatements: true, // Permite ejecutar múltiples consultas a la vez
        });

        // 2. Ejecutar el archivo SQL para crear la base de datos
        const sqlFilePath = path.join(__dirname, 'init.sql');
        await executeSQLFile(connection, sqlFilePath);

        // 3. Cerrar conexión temporal
        await connection.end();

        console.log("Base de datos inicializada correctamente.");

        // 4. Ahora conectamos Sequelize a la base de datos
        const sequelize = new Sequelize(database, username, password, {
            host,
            dialect: 'mysql',
            define: {
                timestamps: false,
                freezeTableName: true,
            }
        });

        await sequelize.authenticate();
        console.log('MySQL conexión correcta');

        return sequelize;
    } catch (error) {
        console.error('MySQL error de conexión', error);
    }
};

module.exports = { sequelize, dbConnectMysql };
