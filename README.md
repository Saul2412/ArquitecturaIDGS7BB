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
- Use protected parts of the API with a token

The code is organized in layers:
- routes
- controllers
- models
- middleware

This makes the code easy to read, change, and grow.

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

2. Go to the folder  
   cd ArquitecturaIDGS7BB

3. Install packages  
   npm install

4. Make a .env file  
   Put this inside (change the values):  
   PORT=3000  
   MONGO_URI=your_mongodb_connection_string  
   SUPABASE_URL=your_supabase_url  
   SUPABASE_KEY=your_supabase_key  
   JWT_TOKEN_SECRET=your_secret_key

5. Start the server  
   npm start

The API runs at: http://localhost:3000  
You can test it with Thunder Client or Postman.

## Main endpoints

Auth (login and register):  
- POST /api/auth/register → make new user  
- POST /api/auth/login → log in and get token

Reports:  
- POST /api/reports → send a new report (need token)  
- GET /api/reports → see all reports (need token)

## Author

Saúl de Jesús Macías Martínez  
