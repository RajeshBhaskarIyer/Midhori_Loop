import { useEffect, useState } from 'react'
import demo from '../demoData'

export default function Admin() {
  const [state, setState] = useState(null)

  function reload() {
    setState(demo.getDemoState())
  }

  useEffect(() => {
    reload()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleApprove(id: any) {
    demo.approveRequest(id)
    reload()
  }

  if (!state) return null

  return (
    <section className="page admin-page">
      <div className="panel">
        <h2>Admin dashboard</h2>
        <p>Manage recycling partners, review business signup requests, and track certification issuance.</p>
      </div>

      <div className="section-block">
        <h3>Pending business onboarding</h3>
        <table>
          <thead>
            <tr>
              <th>Business</th>
              <th>Material</th>
              <th>Request date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {state.requests.map((req: any) => (
              <tr key={req.id}>
                <td>{req.business}</td>
                <td>{req.material}</td>
                <td>{req.requestDate}</td>
                <td>{req.status}</td>
                <td>
                  {req.status === 'Pending' && (
                    <button onClick={() => handleApprove(req.id)}>Approve</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section-block">
        <h3>Partner network</h3>
        <table>
          <thead>
            <tr>
              <th>Partner</th>
              <th>Material type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {state.partners.map((partner: any) => (
              <tr key={partner.id}>
                <td>{partner.name}</td>
                <td>{partner.type}</td>
                <td>{partner.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
