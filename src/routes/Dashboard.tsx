import { useState } from 'react'

const sampleMaterials = [
  { id: 'C-120', type: 'Cardboard', business: 'Green Supply Co.', status: 'In transit', eta: '2 hrs' },
  { id: 'M-333', type: 'Metal', business: 'City Foods', status: 'Delivered', eta: 'Completed' },
  { id: 'P-021', type: 'Plastic', business: 'EcoPack Ltd.', status: 'Awaiting pickup', eta: 'Today' },
]

export default function Dashboard() {
  const [materials] = useState(sampleMaterials)

  return (
    <section className="page dashboard-page">
      <div className="panel">
        <h2>Material tracking dashboard</h2>
        <p>Monitor collections, delivery status, and recycling partner handoff at a glance.</p>
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
            </tr>
          </thead>
          <tbody>
            {materials.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.type}</td>
                <td>{item.business}</td>
                <td>{item.status}</td>
                <td>{item.eta}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
