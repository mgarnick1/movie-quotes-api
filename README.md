# movie-quotes-api
Sample API in nodejs with a postgresql db. 

You will need to create a postgres database
If you have not already installed postgresql please do the following:
- Install postgres
- enter `psql` in the terminal
- enter `\du` and ensure there is a user with Create DB role attributes
- If you are not currently logged in as a user with Create DB roles, please switch to one via, `\c - <user name here>`
- Next enter `CREATE DATABASE demo_database;`, or whatever database name you want to use. This created the database in postgresql.
- Next use your preferred database management tool. I use DBeaver. 
- Create a new database connection. 
- The host will be localhost or any public url.
- the Database will be the database you just created
- Username is the psql username, you can always find this with `\conninfo`
- Password is your psql username password. 
- After completing this steps you have connected to an empty database. 

# Create a .env file
- Create a `.env` file and populate it with your database connection info. See the pool.js file to env variables. Feel free to change them as you prefer. 
