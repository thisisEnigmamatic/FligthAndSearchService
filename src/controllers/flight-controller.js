const {FlightService} = require('../services/index');
const flightService= new FlightService();
const create=async (req,res)=>{
    try{
        const  flightRequestData={
            flightNumber:req.body.flightNumber,
            airplaneId:req.body.airplaneId,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime:req.body.arrivalTime,
            departureTime:req.body.departureTime,
            price:req.body.price

        }
        const flight =await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Flight created successfully',
            err: {}
        });

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            data: {},
            success:false,
            message:'Not able to create a flight',
            err:error
        })  ;
    }
}
const getAll= async (req,res)=>{
    try{
        const flights = await flightService.getAlltData(req.query);
        return res.status(200).json({
            data: flights,
            success: true,
            err: {},
            message: 'Successfully fetched the flights'
        });

    }
    catch(error){
        console.log(error);
         return res.status(500).json({ 
            data: {},
            success: false,
            message: 'Not able to fetch flights',
            err: error
        });
    }
};

const getAllFlights=async (req,res)=>{
    try{
        const flights = await flightService.getAlltData(req.query);
    }catch(error){
        console.log(error);
        return res.status(500).json({ 
            data: {},
            success: false,
            message: 'Not able to fetch flights',
            err: error
        });
    }
};

module.exports={
    create,
    getAll,


};

    