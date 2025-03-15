# 🎬 API Rest para Gestión de Películas y Usuarios

Este proyecto es una API Rest desarrollada en **Node.js** y **Express** que permite gestionar una base de datos entre usuarios, películas y categorías. La API está diseñada para ofrecer funcionalidades como la creación de usuarios y películas, filtrado y paginación de películas, y gestión de películas vistas por usuarios.

## 🚀 Características Principales

### 👥 **Gestión de Usuarios**
- **Creación de usuarios** con nombre, email y contraseña.
- **Listado de usuarios** con las películas que han visto.

### 🎥 **Gestión de Películas**
- **Creación de películas** con título, descripción, fecha de estreno y categoría.
- **Listado de películas** con filtrado por título y categoría.
- **Paginación y ordenamiento** por fecha de estreno (de la más reciente a la más antigua).
- **Endpoint para obtener novedades** (películas estrenadas en las últimas 3 semanas).

### 🗂️ **Gestión de Categorías**
- **Categorías precargadas** en la base de datos: Terror, Suspenso, Drama, Comedia.

### 🛠️ **Funcionalidades Adicionales**
- **Marcar una película como vista** por un usuario.
- **Listado de películas vistas** por un usuario específico.

## 💻 Tecnologías Utilizadas

### 🛠️ **Backend**
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white) (ORM para la gestión de la base de datos)

### 🗄️ **Base de Datos**
- ![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white) (MySQL)

### 🧪 **Herramientas de Pruebas**
- ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white) (para pruebas de endpoints)
Se incluye un archivo JSON (`API_Peliculas.postman_collection.json`) con todas las rutas de la API y ejemplos de solicitudes/respuestas. Puedes importar este archivo en Postman para probar la API fácilmente.

### ✅ **Validación de Datos**
- ![Express-validator](https://img.shields.io/badge/Express_validator-000000?style=for-the-badge&logo=express&logoColor=white) (para validar los datos de entrada en los endpoints)

### 📄 **Modelado de Clases** (Modelo Relacional.png)
Los modelos de la base de datos están definidos en Sequelize, incluyendo:
- **Usuario**: `User` (nombre, email, contraseña).
- **Película**: `Movie` (título, descripción, fecha de estreno, categoría).
- **Categoría**: `Category` (nombre de la categoría, descripción).
- **Vistas**: `Seen` (relación entre usuarios y películas vistas).

