<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# 🎯 Pokedex API - Proyecto NestJS

Este es un proyecto de API REST desarrollado con NestJS que simula una Pokedex, permitiendo gestionar información de Pokémon con una base de datos MongoDB.

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)
- **Docker** y **Docker Compose** (para la base de datos MongoDB)

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd 03-pokedex
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar la base de datos MongoDB

El proyecto incluye un archivo `docker-compose.yml` que configura automáticamente MongoDB. Ejecuta:

```bash
docker compose up -d
```

Esto iniciará MongoDB en el puerto 27017.

### 4. Clonar el archivo `.env.template` y renombrar la copia a `.env`

### 5. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración:

```env
MONGODB_URI=mongodb://localhost:27017/pokedex
PORT=3000
DEFAULT_LIMIT=5
```

### 6. Ejecutar el proyecto

#### En modo desarrollo:

```bash
npm run start:dev
```

#### En modo producción:

```bash
npm run build
npm run start:prod
```

### 7. Reconstruir la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## 📡 Endpoints de la API

Una vez que el servidor esté corriendo, podrás acceder a los siguientes endpoints:

### Pokémon

- `GET /pokemon` - Obtener todos los Pokémon
- `GET /pokemon/:id` - Obtener un Pokémon por ID
- `POST /pokemon` - Crear un nuevo Pokémon
- `PATCH /pokemon/:id` - Actualizar un Pokémon
- `DELETE /pokemon/:id` - Eliminar un Pokémon

## 📁 Estructura del Proyecto

```
src/
├── app.module.ts          # Módulo principal de la aplicación
├── main.ts               # Punto de entrada de la aplicación
├── pokemon/              # Módulo de Pokémon
│   ├── dto/              # Data Transfer Objects
│   ├── entities/         # Entidades de MongoDB
│   ├── pokemon.controller.ts
│   ├── pokemon.module.ts
│   └── pokemon.service.ts
└── seed/                 # Módulo para poblar datos de prueba
    ├── data/             # Datos de ejemplo
    ├── seed.controller.ts
    ├── seed.module.ts
    └── seed.service.ts
```

## 🛠️ Tecnologías Utilizadas

- **NestJS** - Framework de Node.js
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **Docker** - Contenedorización
- **TypeScript** - Lenguaje de programación
- **Axios** - Cliente HTTP para peticiones

## 📝 Notas Importantes

- El proyecto utiliza MongoDB como base de datos
- Los datos se almacenan en un contenedor Docker
- La API está documentada y lista para usar
- Incluye sistema de seed para poblar datos de prueba

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request
