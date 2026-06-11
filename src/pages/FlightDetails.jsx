import { useLocation } from "react-router-dom";

function FlightDetails() {

  const location = useLocation();

  const {
    flightNumber,
    source,
    destination
  } = location.state || {};

  return (
    <div>

      <h1>Flight Details</h1>

      <h2>Flight Number: {flightNumber}</h2>

      <p>Source: {source}</p>

      <p>Destination: {destination}</p>

      <p>Departure Time: 10:30 AM</p>

      <p>Arrival Time: 12:45 PM</p>

      <p>Status: On Time</p>

    </div>
  );
}

export default FlightDetails;