const samplePartners = [
  { name: 'Green Cycle Recycling', type: 'Plastic', status: 'Active' },
  { name: 'Urban Metals Hub', type: 'Metal', status: 'Active' },
]

const sampleRequests = [
  { business: 'Eco Foods', material: 'Cardboard', requestDate: '2026-07-20', status: 'Pending' },
  { business: 'FreshPack', material: 'Plastic', requestDate: '2026-07-19', status: 'Approved' },
]

export default function Admin() {
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
            </tr>
          </thead>
          <tbody>
            {sampleRequests.map((req) => (
              <tr key={req.business + req.material}>
                <td>{req.business}</td>
                <td>{req.material}</td>
                <td>{req.requestDate}</td>
                <td>{req.status}</td>
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
            {samplePartners.map((partner) => (
              <tr key={partner.name}>
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
