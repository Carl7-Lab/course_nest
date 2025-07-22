<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Teslo Shop

Teslo Shop es una API RESTful construida con [NestJS](https://nestjs.com/) que sirve como backend para una tienda en línea. Incluye autenticación, manejo de productos, usuarios y más, siguiendo buenas prácticas de desarrollo y arquitectura modular.

## Tecnologías utilizadas

- [NestJS](https://nestjs.com/)
- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/) (mediante Docker)
- [Docker](https://www.docker.com/)

## Requisitos previos

- [Node.js](https://nodejs.org/) >= 16.x
- [npm](https://www.npmjs.com/) >= 8.x
- [Docker](https://www.docker.com/) (opcional, para base de datos y despliegue)

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables (puedes agregar más según las necesidades de tu proyecto):

```env
# Puerto en el que se ejecuta la aplicación NestJS
PORT=3000

# Variables para la base de datos PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=mi_password_seguro
DB_NAME=teslo_db

# Puedes agregar aquí otras variables de entorno necesarias para tu proyecto
# EJEMPLO:
# JWT_SECRET=mi_clave_secreta
# API_KEY=tu_api_key
```

- `PORT`: Puerto donde se levantará la API (por defecto 3000).
- `DB_HOST`: Host de la base de datos PostgreSQL (por defecto 'localhost' si corres Docker localmente).
- `DB_PORT`: Puerto de la base de datos PostgreSQL (por defecto 5432).
- `DB_USERNAME`: Usuario de la base de datos (por defecto 'postgres').
- `DB_PASSWORD`: Contraseña del usuario de la base de datos.
- `DB_NAME`: Nombre de la base de datos.

> **Nota:** Si usas Docker, asegúrate de que estos valores coincidan con los definidos en `docker-compose.yml` y la configuración de tu contenedor.

## Instalación

1. Clona el repositorio y entra al directorio del proyecto:

   ```bash
   git clone <repo-url>
   cd 04-teslo-shop
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. (Opcional) Levanta la base de datos con Docker:

   ```bash
   docker-compose up -d
   ```

4. Configura las variables de entorno según sea necesario.

## Uso

- Inicia el servidor de desarrollo:

  ```bash
  npm run start:dev
  ```

- El servidor estará disponible en `http://localhost:3000` por defecto.

## Comandos útiles

- Iniciar en modo desarrollo:
  ```bash
  npm run start:dev
  ```
- Compilar la aplicación:
  ```bash
  npm run build
  ```
- Ejecutar pruebas:
  ```bash
  npm run test
  ```
- Ejecutar pruebas end-to-end:
  ```bash
  npm run test:e2e
  ```
- Ejecutar linting:
  ```bash
  npm run lint
  ```
