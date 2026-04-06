const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const apiRoutes = require('./routes/index');
const  db = require('./models/index');
const city = require('./models/city');
//const {City, Airport} = require('./models/index');
const { where } = require('sequelize');
const sequelize = require('./models/index').sequelize;


const setupAndStartServer = async () => {
    //create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', apiRoutes);
    app.listen(3000, async () => {
        console.log(`Server is running on port https://localhost:${PORT}`);
            if(process.env.SYNC_DB){
             db.sequelize.sync({ alter: true });
            }
      



      
    });

}
setupAndStartServer(); 