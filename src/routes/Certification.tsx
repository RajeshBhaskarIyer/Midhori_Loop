import { useEffect, useState } from 'react'
import demo from '../demoData'

export default function Certification() {
  const [state, setState] = useState(null)

  useEffect(() => {
    setState(demo.getDemoState())
  }, [])

  if (!state) return null

  return (
    <section className="page certification-page">
      <div className="panel">
        <h2>Recycling Certification</h2>
        <p>
          We issue certification for businesses that complete verified material collections and recycling handoffs.
          Track your progress toward sustainability goals and prepare for future carbon credit services.
        </p>
      </div>

      <div className="section-block">
        <h3>Certificates</h3>
        <table>
          <thead>
            <tr>
              <th>Certificate ID</th>
              <th>Business</th>
              <th>Material</th>
              <th>Weight (kg)</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.certificates.map((c: any) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.business}</td>
                <td>{c.material}</td>
                <td>{c.weightKg}</td>
                <td>{c.date}</td>
                <td>
                  <button onClick={() => demo.downloadCertificate(c)}>Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
