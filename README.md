# UrbanAlert

Backend API para la gestión de reportes de incidentes urbanos  
Proyecto desarrollado para la materia **Arquitectura de Software** (IDGS7BB)

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-blue)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-success)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## ¿Qué es UrbanAlert?

UrbanAlert es una **API REST** creada para permitir que los ciudadanos reporten incidentes en entornos urbanos (accidentes, emergencias, actividades sospechosas, etc.). Los reportes se almacenan de forma segura y estructurada, ayudando a monitorear y gestionar situaciones de riesgo en la ciudad.

Este proyecto fue desarrollado como parte de la asignatura **Arquitectura de Software**.

## Características principales

- Registro y autenticación segura de usuarios (contraseñas encriptadas con bcrypt)
- Generación y validación de tokens **JWT** para rutas protegidas
- Envío de reportes de incidentes por usuarios autenticados
- Consulta de reportes almacenados
- Arquitectura en capas (**N-Layer** / Clean Architecture):
  - Routes
  - Controllers
  - Models
  - Middleware

## Tecnologías utilizadas

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **JWT** (JSON Web Tokens)
- **bcryptjs** – Encriptación de contraseñas
- **dotenv** – Variables de entorno
- **Supabase** (autenticación y/o almacenamiento – según configuración)

## Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Saul2412/ArquitecturaIDGS7BB.git

2. Entrar al directorio del proyecto
Bashcd ArquitecturaIDGS7BB
3. Instalar dependencias
Bashnpm install
4. Configurar variables de entorno
Crea un archivo .env en la raíz del proyecto con el siguiente contenido:
envPORT=3000
MONGO_URI=your_mongodb_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
JWT_TOKEN_SECRET=tu_clave_secreta_muy_larga_y_segura
Importante: Nunca subas el archivo .env al repositorio. Asegúrate de que esté en .gitignore.
5. Iniciar el servidor
Bashnpm start
La API estará disponible en:
http://localhost:3000
Recomendamos probar los endpoints con Thunder Client, Postman o Insomnia.