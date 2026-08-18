import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Certification', path: '/certification' },
  { label: 'Signup', path: '/signup' },
  { label: 'Admin', path: '/admin' },
  { label: 'Contact', path: '/contact' },
]

export default function Header() {
  return (
    <header className="site-header">
      <div className="brand">
        <div className="logo-mark">∞</div>
        <div>
          <h1>Midhori Loop</h1>
          <p>Business recycling connection · tracking · certification</p>
        </div>
      </div>
      <nav>
        {navItems.map((item) => (
          <NavLink key={item.path} to={item.path} className="nav-link">
            {item.label}
          </NavLink>
        ))}
        <button
          title="Reset demo data"
          onClick={() => {
            if (confirm('Clear demo data and reload?')) {
              localStorage.removeItem('midhori_demo_state')
              location.reload()
            }
          }}
          style={{ marginLeft: 8 }}
        >
          Reset Demo
        </button>
      </nav>
    </header>
  )
}
