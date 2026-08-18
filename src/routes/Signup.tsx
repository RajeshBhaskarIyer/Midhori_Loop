import { useState } from 'react'
import demo from '../demoData'

export default function Signup() {
  const [business, setBusiness] = useState('')
  const [material, setMaterial] = useState('')
  const [message, setMessage] = useState<string | null>(null)

  function handleSubmit() {
    if (!business || !material) {
      setMessage('Please provide business name and material type.')
      return
    }
    const id = demo.addSignupRequest(business, material)
    setMessage(`Signup request submitted (id: ${id}). Admin can approve it in the Admin page.`)
    setBusiness('')
    setMaterial('')
  }

  return (
    <section className="page signup-page">
      <div className="panel">
        <h2>B2B Signup</h2>
        <p>Register your business to join the Midhori Loop recycling network and start tracking materials.</p>
      </div>

      <div className="section-block">
        <h3>Business onboarding</h3>
        <form className="signup-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Business name
            <input value={business} onChange={(e) => setBusiness(e.target.value)} type="text" placeholder="Eco Manufacturing Pvt. Ltd." />
          </label>
          <label>
            Material type
            <input value={material} onChange={(e) => setMaterial(e.target.value)} type="text" placeholder="Plastic, cardboard, metal" />
          </label>
          <button type="button" onClick={handleSubmit}>Submit signup request</button>
        </form>

        {message && <div style={{ marginTop: 12 }}>{message}</div>}
      </div>
    </section>
  )
}
