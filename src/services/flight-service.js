const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {comapreTime} = require('../utils/helper');
class FlightService{
    constructor(){
            this.airplaneRepository = new AirplaneRepository();
            this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!comapreTime(data.arrivalTime, data.departureTime)){
                throw {error: 'Departure time should be less than arrival time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
            
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }
    async  getAlltData(data){
        try{
            const flights= await this.flightRepository.getAllFlights(data);
            return flights;     
        }catch(error){
            console.log("Something went wrong in the service layer");
            throw {error};
        }

    }
}

    
module.exports = FlightService;
/**
 * {
 *   flightNumber,
 *  airplaneId,
 *  departureAirportId,
 *  arrivalAirportId,
 *  arrivalTime,
 *  departureTime,
 *  price,
 *  boardingGate,
 *  totalSeats--> airplane total seats
 * }
 */