import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

const links = [
  { to: '/', label: 'The Story' },
  { to: '/method', label: 'The Method' },
  { to: '/classes', label: 'The Classes' },
  { to: '/rules', label: "The 'Rules'" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <Link to="/" className="nav__logo wordmark" onClick={() => setOpen(false)}>KNND</Link>

        <nav className="nav__links">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/schedule" className="btn btn--light nav__cta">Book Your Class</Link>

        <button className="nav__burger" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>

      <div className="nav__mobile">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
            className={({ isActive }) => `nav__mlink ${isActive ? 'is-active' : ''}`}>
            {l.label}
          </NavLink>
        ))}
        <Link to="/schedule" className="btn btn--light" onClick={() => setOpen(false)}>Book Your Class</Link>
      </div>
    </header>
  )
}
