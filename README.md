UrbanAlert
What is UrbanAlert?

UrbanAlert is a backend API developed to manage urban incident reports. The system allows users to register, log in securely, and submit incident reports that are stored in a database. The platform is designed to help manage and monitor risk situations in urban environments through a structured reporting system.

This project was developed as part of a software architecture course.

Description

UrbanAlert helps citizens report incidents such as accidents, emergencies, or suspicious activities in a city.

The system follows a layered architecture (N-Layer) to organize the code into different components such as:

routes

controllers

models

middleware

This structure improves maintainability, scalability, and development organization.

The application includes core features such as user registration, login authentication, and secure access to protected routes using JWT authentication.

Users can:

Register in the system

Log in securely

Submit incident reports

Access protected routes using JWT authentication

Technologies Used

This project uses the following technologies:

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcryptjs

dotenv

Installation Guide

Follow the steps below to install and run the UrbanAlert API locally.

1. Clone the repository
git clone https://github.com/Saul2412/ArquitecturaIDGS7BB.git
2. Navigate to the project folder
cd ArquitecturaIDGS7BB
3. Install dependencies

Run the following command to install the required packages:

npm install
4. Configure environment variables

Create a .env file in the root directory of the project.

Example configuration:

PORT=3000
MONGO_URI=your_mongodb_connection_string
SUPABASE_KEY=your_supabase_key
SUPABASE_URL=your_supabase_url
JWT_TOKEN_SECRET=your_secret_key
5. Run the server

Start the application with the following command:

npm start

If everything is configured correctly, the server will start and connect to the database. The API will run at:

http://localhost:3000

You can test the API using tools such as Thunder Client or Postman.

Main Endpoints
Auth Routes
POST /api/auth/register

Allows a new user to create an account in the system. The server receives the user's information, encrypts the password using bcrypt, and stores the user in the database.

POST /api/auth/login

Allows a registered user to log in. The server verifies the credentials and generates a JWT token that will be used to access protected routes.

Report Routes
POST /api/reports

Allows authenticated users to submit an incident report. The request must include a valid JWT token, which is verified before saving the report in the database.

GET /api/reports

Retrieves the list of incident reports stored in the database so they can be viewed by the system or administrators.

Author

Saul de Jesus Macias Martinez
Software Development Student
Project developed for Software Architecture.