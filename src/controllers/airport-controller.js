const AirportService = require('../services/airport-service');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const response = await airportService.create(req.body); // ✅ fixed

        return res.status(201).json({ 
            data: response,
            success: true,
            message: "Successfully created a airport",
            err: {}
        });

    } catch (error) {
        console.log("Something went wrong in the controller layer");

        return res.status(500).json({   
            data: {},
            success: false,
            message: "Unable to create a airport", 
            err: error
        });
    }
};

module.exports = {
    create
};