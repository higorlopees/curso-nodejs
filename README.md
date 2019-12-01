# news-portal
News Portal application repository used in a NodeJS course

## Configuring the environment
First instal [nodejs](https://nodejs.org/).
Then install [MySQL Installer](https://dev.mysql.com/downloads/).

After that, use `git clone` to clone the repository to your local machine.

With your MySQL server service active in your machine, start MySQL prompt and follow the commands in the **_/app/database/create-database-environment.sql_** file to create the database(s) and table(s) necessary.

Finally, use `npm install` to install dependecies.

## Run the application
Use `npm run watch` or `npm run-script watch` to start application in development mode.

Use `npm start` to start application in production mode.
