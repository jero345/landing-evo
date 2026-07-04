import { Link } from 'react-router-dom'
import { useReveal } from '../hooks.js'
import './pages.css'

const sessions = [
  { label: 'SCLPT', img: '/assets/sclpt.jpg' },
  { label: 'KNND50™', img: '/assets/sess-portrait.jpg' },
  { label: 'BRRN', img: '/assets/brrn.jpg' },
]
const sessionsExtra = ['/assets/glow.jpg', '/assets/burn-wide.jpg', '/assets/sess-sq.jpg']
const follow = ['/assets/follow-1.jpg', '/assets/follow-2.jpg', '/assets/follow-3.jpg', '/assets/follow-4.jpg']

export default function Home() {
  useReveal()
  return (
    <div className="page">
      {/* ---------------- HERO ---------------- */}
      <section className="hero">
        <img className="hero__bg" src="/assets/hero-home.jpg" alt="KNND hot pilates" />
        <div className="hero__scrim" />
        <div className="hero__content fade-up">
          <h1 className="display hero__title">A Special KNND<br/>of Pilates<sup>™</sup></h1>
          <p className="hero__sub">Welcome to Medellín's hottest pilates club</p>
          <Link to="/schedule" className="btn btn--light">Join Now</Link>
        </div>
      </section>

      {/* ------------- NOT ANOTHER SOFT STUDIO ------------- */}
      <section className="story">
        <div className="story__grid container">
          <div className="story__text reveal">
            <h2 className="display story__title">Not Another<br/>Soft Studio</h2>
            <p>KNND no es otro estudio de pilates. Es un ‘hot pilates club’ creado para
              mujeres que quieren resultados y saben lo que están buscando.</p>
            <p>Eliminamos los clichés para enfocarnos en el trabajo: movimiento de
              alta intensidad y bajo impacto bajo un método propio, dentro de salas
              que retan la mente tanto como el cuerpo.</p>
            <p className="story__lead">This is where precision meets heat.</p>
            <Link to="/method" className="btn btn--solid">Explore Our Method</Link>
          </div>
          <div className="story__img reveal">
            <img src="/assets/story.jpg" alt="KNND training" />
          </div>
        </div>
      </section>

      {/* ------------- SIGNATURE SESSIONS ------------- */}
      <section className="sessions">
        <h2 className="display sessions__heading reveal">Our Signature ‘Sessions’</h2>
        <div className="sessions__row container reveal">
          {sessions.map((s) => (
            <figure className="sess-card" key={s.label}>
              <img src={s.img} alt={s.label} />
              <figcaption className="sess-card__label">{s.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="sessions__row sessions__row--sub container reveal">
          {sessionsExtra.map((img, i) => (
            <figure className="sess-card sess-card--sub" key={i}>
              <img src={img} alt="" />
            </figure>
          ))}
        </div>
        <div className="sessions__cta reveal">
          <Link to="/classes" className="link-underline">Ver programación completa</Link>
        </div>
      </section>

      {/* ------------- KNND50 FEATURE ------------- */}
      <section className="feature">
        <img className="feature__bg" src="/assets/knnd50-face.jpg" alt="" />
        <div className="feature__scrim" />
        <div className="feature__content reveal">
          <h2 className="display feature__title">KNND50<sup>™</sup></h2>
          <ul className="feature__list">
            <li>Fifty minutes in infrared heat</li>
            <li className="feature__hl">Designed to sculpt, challenge, and switch you on</li>
            <li>Controlled burn</li>
            <li>Strong core</li>
            <li>Better posture</li>
          </ul>
          <Link to="/method" className="btn btn--light">Explore Our Method</Link>
        </div>
      </section>

      {/* ------------- FOLLOW US ------------- */}
      <section className="follow">
        <h2 className="display follow__heading reveal">
          Follow us <a href="https://instagram.com/knnd.club" target="_blank" rel="noreferrer" className="link-underline">@KNND.CLUB</a>
        </h2>
        <div className="follow__grid container reveal">
          {follow.map((img, i) => (
            <a className="follow__item" href="https://instagram.com/knnd.club" target="_blank" rel="noreferrer" key={i}>
              <img src={img} alt="KNND on Instagram" />
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
