import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks.js'
import './pages.css'

const tabs = ['The Hot Room', 'The Reformer', 'The Yoga Salon']

const cards = [
  { code: 'SCLPT', img: '/assets/sclpt.jpg', title: 'Controlled burn. Clean finish.',
    desc: 'Una sesión de pilates sculpt en calor infrarrojo, enfocada en control, core fuerte, transiciones técnicas y full-body burn.' },
  { code: 'BRRN', img: '/assets/brrn.jpg', title: 'More Heat. More Rhythm. More Challenge.',
    desc: 'La versión más intensa y cardiovascular del Hot Room. Más sudor, más energía, más ritmo y una sensación de reto físico real.' },
  { code: 'GLWW', img: '/assets/glow.jpg', title: 'Flow, length and after-glow.',
    desc: 'Una sesión más fluida y estética, enfocada en elongación, flow y sensación corporal ligera después de clase.' },
  { code: 'FRRM', img: '/assets/class-frrm.jpg', title: 'Precision is hot.',
    desc: 'Una sesión enfocada en forma, técnica, alineación y postura. Ideal para trabajar control, corrección y ejecución limpia.' },
]

export default function Classes() {
  useReveal()
  const [active, setActive] = useState(0)
  return (
    <div className="page">
      <section className="phero">
        <img className="phero__bg" src="/assets/classes-hero.jpg" alt="" />
        <div className="phero__scrim" />
        <h1 className="display phero__title">The Classes</h1>
      </section>

      <section className="intro reveal">
        <p>Elige entre <strong>Hot Room, Reformer, Yoga y Clases Especiales.</strong><br/>
          Cada sesión tiene su propio ritmo, intensidad y after-feel.</p>
        <p>No son clases random dentro de un horario.<br/>
          Son experiencias diseñadas para que sepas qué quieres trabajar,
          cómo quieres sentirte y qué tipo de energía quieres llevarte después.</p>
      </section>

      <div className="classes-tabs reveal">
        {tabs.map((t, i) => (
          <button key={t} className={`classes-tab ${active === i ? 'is-active' : ''}`} onClick={() => setActive(i)}>
            {t}
          </button>
        ))}
      </div>

      <div className="classes-grid reveal">
        {cards.map((c) => (
          <article className="class-card" key={c.code}>
            <img className="class-card__img" src={c.img} alt={c.code} />
            <div className="class-card__label">{c.code}</div>
            <div className="class-card__overlay">
              <p className="class-card__desc"><strong>{c.title}</strong>{c.desc}</p>
              <div className="class-card__big">{c.code}</div>
              <Link to="/schedule" className="btn btn--light">Book Now</Link>
            </div>
          </article>
        ))}
      </div>

      <section className="contact-strip reveal">
        <Link to="/schedule" className="link-underline display">¿Dudas? Contáctanos</Link>
      </section>
    </div>
  )
}
