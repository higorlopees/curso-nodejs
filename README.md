# news-portal
News Portal application repository used in a NodeJS course

## Configuring the environment
First instal [nodejs](https://nodejs.org/).
Then install [MySQL Installer](https://dev.mysql.com/downloads/).

After that, use `git clone` to clone the repository to your local machine.

With your MySQL server service active in your machine, follow the commands in the **_/app/database/create-database-environment.sql_** file to create the database(s) and table(s) necessary.

Then, use `npm install nodemon -g` to install nodemon globally.

Finally, use `npm install` to install dependecies and then `nodemon app` to start application.
