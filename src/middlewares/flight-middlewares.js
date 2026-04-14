const validateCreateFlight = (req, res, next) => {
    if(
        !req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.departureAirportId||
        !req.body.arrivalAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price
    )
    {
      //  if any  of the body param is missing we come inside this block and send a response to the client 
        return res.status(400).json({
            data:{},
            success:false,          
            message:"Invalid request body for create a flight",
            error: 'missing some of the required properties to create a flight'

        });
    }
    next();
}
module.exports = {

    validateCreateFlight
}