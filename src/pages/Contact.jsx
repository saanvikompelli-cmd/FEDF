function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>

      <form>
        <input type="text" placeholder="Enter Your Name" />
        <br /><br />

        <input type="email" placeholder="Enter Your Email" />
        <br /><br />

        <textarea placeholder="Enter Your Message"></textarea>
        <br /><br />

        <button>Send Message</button>
      </form>
    </div>
  )
}

export default Contact