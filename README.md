# UrbanAlert

UrbanAlert is a backend API.  
It helps people report problems in the city, like accidents, emergencies, or strange activities.  
The reports go to a database.  
This project is for a Software Architecture class.

## What UrbanAlert does

People can:
- Register (make a new account)
- Log in safely
- Send reports about incidents
- Use protected parts of the API with a token (JWT)

The code is organized in layers (N-Layer architecture):
- routes
- controllers
- models
- middleware

This makes the code easy to read, change, and grow.

## Project Structure

The project uses this folder structure:

- src/  
  - routes/       (API paths like auth and reports)  
  - controllers/  (business logic)  
  - models/       (database models like User and Report)  
  - middleware/   (checks like auth with JWT)  
- helpers/        (extra functions)  
- middlewares/    (more middleware files)  
- index.js        (main server file)  
- package.json  

This follows N-Layer pattern for good organization.

## Technologies used

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- JWT (for tokens)  
- bcryptjs (to protect passwords)  
- dotenv (for secret settings)  
- Supabase (extra storage or auth)

## How to install and run it
1. Clone the repository
git clone https://github.com/Saul2412/ArquitecturaIDGS7BB.git
2. Go to the project folder
cd ArquitecturaIDGS7BB
3. Install dependencies
npm install
4. Create the .env file

Create a file called .env in the main folder of the project and add the following variables (replace the values with your real information):

PORT=3000
MONGO_URI=your_mongodb_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
JWT_TOKEN_SECRET=your_secret_key
5. Create a .env.template file

It is recommended to create a .env.template file with empty values to use as an example for other developers.

PORT=
MONGO_URI=
SUPABASE_URL=
SUPABASE_KEY=
JWT_TOKEN_SECRET=

Important:

Do NOT upload your real .env file to GitHub.

Add .env to your .gitignore file.

6. Start the server
npm start
API Information

The API will run at:

http://localhost:3000

You can test the endpoints using:

Postman

Thunder Client

Main Endpoints
Authentication

POST /api/auth/register → Create a new user

POST /api/auth/login → Login and receive a token

Reports

POST /api/reports → Create a new report (token required)

GET /api/reports → Get all reports (token required)