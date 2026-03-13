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
   ```bash
   git clone https://github.com/Saul2412/ArquitecturaIDGS7BB.git

Go to the folderBashcd ArquitecturaIDGS7BB
Install packagesBashnpm install
Make a .env file
Create a file called .env in the main folder.
Put this inside (change the values with your real info):envPORT=3000
MONGO_URI=your_mongodb_connection_string
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
JWT_TOKEN_SECRET=your_secret_keyTip: Create a .env.template file with empty values as example (and add it to the repository):envPORT=
MONGO_URI=
SUPABASE_URL=
SUPABASE_KEY=
JWT_TOKEN_SECRET=Do NOT upload your real .env to GitHub. Add .env to .gitignore.
Start the serverBashnpm start

The API runs at: http://localhost:3000
You can test it with Thunder Client or Postman.
Main endpoints
Auth (login and register):

POST /api/auth/register → make new user
POST /api/auth/login → log in and get token

Reports:

POST /api/reports → send a new report (need token)
GET /api/reports → see all reports (need token)