export default function Home() {
  return (
    <section className="page home-page">
      <div className="hero-card">
        <div>
          <span className="eyebrow">Women-led climate action</span>
          <h2>Connect your business with verified recycling partners</h2>
          <p>
            Midhori Loop helps enterprises collect recyclable materials, track shipments, and deliver certification for sustainability reporting and carbon credit readiness.
          </p>
        </div>
      </div>

      <div className="grid">
        <article className="feature-card">
          <h3>Business + Recycling Network</h3>
          <p>Seamlessly route materials from businesses to recycling units in our trusted partner network.</p>
        </article>
        <article className="feature-card">
          <h3>Material Tracking</h3>
          <p>Follow every collection from pickup to recycling unit handoff with real-time status updates.</p>
        </article>
        <article className="feature-card">
          <h3>Certification & Carbon Credits</h3>
          <p>Receive recycling certificates and build your business case for carbon-impact reporting.</p>
        </article>
      </div>

      <div className="section-block">
        <h3>How it works</h3>
        <ol>
          <li>Business registers materials and collection requests.</li>
          <li>Recycling units accept pickups and report progress.</li>
          <li>Midhori Loop tracks status and issues certification when materials are processed.</li>
        </ol>
      </div>
    </section>
  )
}
