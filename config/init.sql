-- DROP DATABASE IF EXISTS apiMovies.users;
-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS apiMovies;
USE apiMovies;

-- Crear un usuario y asignarle una contraseña
CREATE USER IF NOT EXISTS 'root'@'localhost' IDENTIFIED BY '666666';

-- Asignar todos los privilegios al usuario sobre la base de datos
GRANT ALL PRIVILEGES ON apiMovies.* TO 'root'@'localhost';

-- Recargar los privilegios
FLUSH PRIVILEGES;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo en la tabla de usuarios
INSERT INTO users (name, email, password, createdAt, updatedAt) VALUES
('Un nombre ejemplo', 'one@example.com', 'contraseña123', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
('Otro nombre de prueba', 'another@example.com', 'contraseña456', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

-- Crear la tabla de categorías
CREATE TABLE IF NOT EXISTS categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nameCategory VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insertar categorías de ejemplo
INSERT INTO categories (nameCategory, description) VALUES
('Terror', 'Películas que provocan miedo y tensión.'),
('Suspenso', 'Películas que mantienen al espectador en vilo.'),
('Drama', 'Películas con historias emocionales y profundas.'),
('Comedia', 'Películas divertidas y entretenidas.');

CREATE TABLE IF NOT EXISTS movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    description TEXT,
    datePremiere DATETIME,
    category_name VARCHAR(255),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (category_name) REFERENCES categories(nameCategory)
);

-- Insertar películas de ejemplo
INSERT INTO movies (title, description, datePremiere, category_name) VALUES
('El Padrino', 'Una película clásica de drama y crimen.', '1972-03-24 00:00:00', 'Drama'),
('Mad Max: Fury Road', 'Una película llena de acción y persecuciones.', '2015-05-15 00:00:00', 'Terror'),
('El Señor de los Anillos: La Comunidad del Anillo', 'Una épica aventura en la Tierra Media.', '2001-12-19 00:00:00', 'Drama'),
('Toy Story', 'Una película animada sobre juguetes que cobran vida.', '1995-11-22 00:00:00', 'Comedia'),
('El Resplandor', 'Una película de terror psicológico.', '1980-05-23 00:00:00', 'Terror');

CREATE TABLE IF NOT EXISTS seen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    idUser VARCHAR(100) NOT NULL,
    idMovie VARCHAR(255) NOT NULL,
    viewedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Fecha en que se marcó como vista
    FOREIGN KEY (idUser) REFERENCES users(email),
    FOREIGN KEY (idMovie) REFERENCES movies(title),
    UNIQUE (idUser, idMovie)  -- Evita duplicados (un usuario no puede marcar la misma película dos veces)
);

-- Verificar las tablas creadas
USE apiMovies;
SHOW TABLES;