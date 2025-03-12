-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS apiPeliculas;
USE apiPeliculas;

-- Crear un usuario y asignarle una contraseña
CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY '666666';

-- Asignar todos los privilegios al usuario sobre la base de datos
GRANT ALL PRIVILEGES ON apiPeliculas.* TO 'root'@'localhost';

-- Recargar los privilegios
FLUSH PRIVILEGES;

-- Crear una tabla de ejemplo (usuarios)
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo en la tabla
INSERT INTO usuarios (nombre, email, contraseña) VALUES
('Juan Pérez', 'juan@example.com', 'contraseña123'),
('Ana Gómez', 'ana@example.com', 'contraseña456');