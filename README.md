# MiniBlog API

## Descripción del proyecto

MiniBlog API es una API REST desarrollada con Node.js, Express y PostgreSQL para gestionar autores y publicaciones de un blog.

El proyecto incluye:

* CRUD completo de autores
* CRUD completo de posts
* Relaciones entre autores y posts
* PostgreSQL como base de datos
* Arquitectura por capas:

  * routes
  * controllers
  * services
* Tests automatizados con Jest y Supertest
* Documentación OpenAPI 3.0

---

# Tecnologías utilizadas

* Node.js
* Express
* PostgreSQL
* pg
* dotenv
* Jest
* Supertest

---

# Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

## Node.js

Descargar desde:

[https://nodejs.org](https://nodejs.org)

Verificar instalación:

```bash
node -v
npm -v
```

---

## PostgreSQL

Descargar desde:

[https://www.postgresql.org/download/](https://www.postgresql.org/download/)

Verificar instalación:

```bash
psql --version
```

---

# Instalación y configuración local

## 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/miniblog-api.git
```

Entrar al proyecto:

```bash
cd miniblog-api
```

---

## 2. Instalar dependencias

```bash
npm install
```

---

## 3. Configurar variables de entorno

Crear un archivo `.env` basándose en `.env.example`.

Ejemplo:

```env
PORT=3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/miniblog
```

---

## 4. Crear la base de datos

Entrar a PostgreSQL:

```bash
psql -U postgres
```

Crear base de datos:

```sql
CREATE DATABASE miniblog;
```

Salir de PostgreSQL:

```sql
\q
```

---

## 5. Ejecutar scripts SQL

### Crear tablas

```bash
psql -U postgres -d miniblog -f sql/setup.sql
```

### Insertar datos de ejemplo

```bash
psql -U postgres -d miniblog -f sql/seed.sql
```

---

## 6. Iniciar el servidor

```bash
node src/index.js
```

Si todo funciona correctamente deberías ver:

```bash
Server running on port 3000
Connected to PostgreSQL
```

---

# Endpoints principales

## Authors

| Método | Endpoint     |
| ------ | ------------ |
| GET    | /authors     |
| GET    | /authors/:id |
| POST   | /authors     |
| PUT    | /authors/:id |
| DELETE | /authors/:id |

---

## Posts

| Método | Endpoint                |
| ------ | ----------------------- |
| GET    | /posts                  |
| GET    | /posts/:id              |
| GET    | /posts/author/:authorId |
| POST   | /posts                  |
| PUT    | /posts/:id              |
| DELETE | /posts/:id              |

---

# Ejecutar tests

El proyecto utiliza Jest y Supertest.

Ejecutar tests:

```bash
npm test
```

---

# Documentación OpenAPI

La documentación OpenAPI se encuentra en:

```bash
docs/openapi.yaml
```

Puedes visualizarla en Swagger Editor:

[https://editor.swagger.io/](https://editor.swagger.io/)

Simplemente copia y pega el contenido del archivo `openapi.yaml`.

---

# Deployment en Railway

## 1. Crear cuenta en Railway

[https://railway.app/](https://railway.app/)

---

## 2. Crear un nuevo proyecto

* Click en "New Project"

---

## 3. Agregar PostgreSQL

* Dentro del proyecto:

  * "Add Service"
  * "Database"
  * "PostgreSQL"

Railway generará automáticamente una base de datos PostgreSQL.

---

## 4. Conectar el repositorio GitHub

* Seleccionar:

  * "Deploy from GitHub repo"
* Elegir el repositorio del proyecto

---

## 5. Configurar variables de entorno

En Railway:

* Ir a:

  * Variables

Agregar:

```env
PORT=3000
DATABASE_URL=valor_generado_por_railway
```

---

## 6. Obtener DATABASE_URL

Railway genera automáticamente la variable:

```env
DATABASE_URL
```

Puedes copiarla desde:

* PostgreSQL Service
* Variables
* Internal Database URL

---

## 7. Deploy automático

Cada push a GitHub actualizará automáticamente el deployment.

---

# Estructura del proyecto

```bash
miniblog-api/
│
├── docs/
│   └── openapi.yaml
│
├── sql/
│   ├── setup.sql
│   └── seed.sql
│
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── db.js
│   └── index.js
│
├── tests/
│   ├── authors.test.js
│   └── posts.test.js
│
├── .env
├── .env.example
├── package.json
└── README.md
```

---

# Registro del uso de IA

Durante el desarrollo de este proyecto se utilizó Inteligencia Artificial como asistencia para:

* Generación de código base
* Estructura inicial del proyecto
* Creación de tests
* Generación de documentación OpenAPI
* Generación de ejemplos SQL

Todo el código fue revisado, adaptado y validado manualmente antes de utilizarse en el proyecto final.

---

# Autor

Proyecto desarrollado como práctica de backend con Node.js, Express y PostgreSQL.
