/   
    -src/
        index.js// server
        models/
        controllers/
        middlewares/
        services/
        utils/
        config/
        repository/
    - tests / [ later]
    - static/
    - temp/

#welcome to fligth Services
##project setup
    -clone the project on ur local
    -execute `npm install` on the same path as of your root directory of the downloaded project
    -Create a `.env` file in the root directory and add the following enviroment variable
        -`port=3000`
    -Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

...
{
  "development": {
    "username": "root",
    "password": "Ayush2005",
    "database": "Flight_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
  }

...
once you have added your db config as listed above ,go tothe src folder from your terrminal and execute `npx sequelize db:create` and then execute

`npx sequelize db:migrate` 
    
..


## DB design
    -Airplane table 
    -Flight 
    -Airport
    -City

    - A Flight belongs to an airplane but one airplane can be used in multiple flights
    -A city has many airports but one airport belongs to a city
    -One airport can have many flights, but a flight belongs to one airport 
