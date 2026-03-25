const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city-repository');

const setupAndStartServer = async () => {
    //create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        const cityRepository = new CityRepository();
        cityRepository.createCity({name:"Delhi"});
        
        
    });
}
setupAndStartServer();