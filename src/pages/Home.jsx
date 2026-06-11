function Home() {
  return (
    <div>

      <h1>Welcome to Flight Status Tracker</h1>

      <p>
        Track live flight information quickly and easily.
      </p>

      <button>Check Flights</button>

      <section className="stats">

        <div className="card">
          <h2>5000+</h2>
          <p>Flights Tracked</p>
        </div>

        <div className="card">
          <h2>100+</h2>
          <p>Airlines Connected</p>
        </div>

        <div className="card">
          <h2>24/7</h2>
          <p>Live Updates</p>
        </div>

      </section>

      <section className="features">

        <h2>Why Choose Us?</h2>

        <ul>
          <li>✅ Real-Time Flight Tracking</li>
          <li>✅ Instant Flight Search</li>
          <li>✅ Easy User Experience</li>
          <li>✅ Fast and Secure Access</li>
        </ul>

      </section>

    </div>
  )
}

export default Home