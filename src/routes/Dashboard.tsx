import { useEffect, useState } from 'react'
import demo from '../demoData'

export default function Dashboard() {
  const [state, setState] = useState(null)

  useEffect(() => {
    setState(demo.getDemoState())
  }, [])

  if (!state) return null

  const materials = state.materials || []
  const total = materials.length
  const delivered = materials.filter((m: any) => m.status.toLowerCase().includes('deliver')).length

  function handleGenerateCertificate(item: any) {
    const cert = demo.createCertificate(item.business, item.type, Math.floor(Math.random() * 2000) + 100)
    demo.downloadCertificate(cert)
    setState(demo.getDemoState())
  }

  return (
    <section className="page dashboard-page">
      <div className="panel">
        <h2>Material tracking dashboard</h2>
        <p>Monitor collections, delivery status, and recycling partner handoff at a glance.</p>
        <div style={{ marginTop: 12 }}>
          <strong>Total materials:</strong> {total} &nbsp; <strong>Delivered:</strong> {delivered}
        </div>
      </div>

      <div className="table-panel">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Material</th>
              <th>Business</th>
              <th>Status</th>
              <th>ETA</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {materials.map((item: any) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.business}</td>
                <td>{item.status}</td>
                <td>{item.eta}</td>
                <td>
                  {item.status.toLowerCase().includes('deliver') && (
                    <button onClick={() => handleGenerateCertificate(item)}>Generate Certificate</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
