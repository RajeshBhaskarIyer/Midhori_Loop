export default function Signup() {
  return (
    <section className="page signup-page">
      <div className="panel">
        <h2>B2B Signup</h2>
        <p>Register your business to join the Midhori Loop recycling network and start tracking materials.</p>
      </div>

      <div className="section-block">
        <h3>Business onboarding</h3>
        <form className="signup-form">
          <label>
            Business name
            <input type="text" placeholder="Eco Manufacturing Pvt. Ltd." />
          </label>
          <label>
            Contact email
            <input type="email" placeholder="contact@business.com" />
          </label>
          <label>
            City / region
            <input type="text" placeholder="Bengaluru, Karnataka" />
          </label>
          <label>
            Material types
            <input type="text" placeholder="Plastic, cardboard, metal" />
          </label>
          <button type="button">Submit signup request</button>
        </form>
      </div>
    </section>
  )
}
