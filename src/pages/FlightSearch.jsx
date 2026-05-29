import { Link } from 'react-router-dom'
function FlightSearch() {
  return (
    <div>
      <h1>Flight Search</h1>

      <form>
        <input type="text" placeholder="Enter Flight Number" />
        <br /><br />

        <input type="text" placeholder="Source" />
        <br /><br />

        <input type="text" placeholder="Destination" />
        <br /><br />

        <Link to="/details">
  <button>Search Flight</button>
</Link>
      </form>
    </div>
  )
}

export default FlightSearch