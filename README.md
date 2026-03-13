# UrbanAlert

UrbanAlert es una **API backend** desarrollada para gestionar reportes de incidentes urbanos. Permite a los usuarios registrarse, iniciar sesión de forma segura y enviar reportes de incidentes (accidentes, emergencias, actividades sospechosas, etc.), los cuales se almacenan en una base de datos MongoDB.

Este proyecto fue realizado como parte de la materia **Arquitectura de Software** (IDGS7BB).

## Descripción

Ayuda a los ciudadanos a reportar situaciones de riesgo en la ciudad de manera estructurada y segura.  
Utiliza una **arquitectura en capas (N-Layer)** con separación clara entre:

- Rutas (routes)
- Controladores (controllers)
- Modelos (models)
- Middlewares

Esto mejora la **mantenibilidad**, **escalabilidad** y organización del código.

### Funcionalidades principales
- Registro de usuarios
- Inicio de sesión seguro
- Envío de reportes de incidentes (protegido con JWT)
- Consulta de reportes

## Tecnologías utilizadas

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JSON Web Token (JWT)  
- bcryptjs (para encriptar contraseñas)  
- dotenv (variables de entorno)

## Instalación y ejecución local

Sigue estos pasos para correr el proyecto en tu máquina:

1. Clona el repositorio  
   ```bash
   git clone https://github.com/Saul2412/ArquitecturaIDGS7BB.git
Entra a la carpeta del proyectoBashcd ArquitecturaIDGS7BB
Instala las dependenciasBashnpm install
Crea un archivo .env en la raíz con el siguiente contenido (cambia los valores):envPORT=3000
MONGO_URI=mongodb://localhost:27017/urbanalert    # o tu cadena de conexión de MongoDB Atlas
JWT_TOKEN_SECRET=tu_clave_secreta_super_larga_aqui
# Si usas Supabase (opcional):
# SUPABASE_URL=tu_url
# SUPABASE_KEY=tu_key
Inicia el servidorBashnpm start

El servidor debería arrancar en:
http://localhost:3000 (o el puerto que hayas configurado)
Prueba la API con Thunder Client, Postman o cualquier cliente HTTP.
Endpoints principales
Autenticación

POST /api/auth/register
→ Registra un nuevo usuario (encripta la contraseña con bcrypt)
POST /api/auth/login
→ Inicia sesión y devuelve un token JWT

Reportes (requieren JWT en el header Authorization: Bearer <token>)

POST /api/reports
→ Crea un nuevo reporte de incidente
GET /api/reports
→ Obtiene la lista de todos los reportes

Autor
Saúl de Jesús Macías Martínez
Estudiante de Desarrollo de Software
Proyecto para la materia Arquitectura de Software