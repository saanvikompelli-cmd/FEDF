import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FlightSearch() {

  const navigate = useNavigate();

  const [flightNumber, setFlightNumber] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const handleSearch = () => {

    navigate("/details", {
      state: {
        flightNumber,
        source,
        destination
      }
    });

  };

  return (
    <div>
      <h1>Flight Search</h1>

      <form>

        <input
          type="text"
          placeholder="Enter Flight Number"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />

        <br /><br />

        <button
          type="button"
          onClick={handleSearch}
        >
          Search Flight
        </button>

      </form>
    </div>
  );
}

export default FlightSearch;