import { useState } from 'react'
import { useReveal } from '../hooks.js'
import './pages.css'

const rules = [
  { n: '01', t: 'Bookings', body: (
    <>
      <p>Reserva tu lugar con anticipación desde la app o la web. Los cupos son limitados y las salas se llenan rápido.</p>
      <p>Tu spot se confirma solo cuando la reserva queda cerrada. Sin reserva, no hay Room.</p>
    </>) },
  { n: '02', t: 'Health & Hot Room', body: (
    <>
      <p>La Hot Room trabaja con calor infrarrojo. Llega hidratada y trae tu botella.</p>
      <p>Si tienes alguna condición médica, embarazo o lesión, avísanos antes de entrenar.</p>
    </>) },
  { n: '03', t: 'Running Late?', body: (
    <>
      <p>Llega 10 minutos antes. Por seguridad y respeto a la clase, el ingreso se cierra al iniciar la sesión.</p>
      <p>Si llegas tarde, tu cupo puede liberarse.</p>
    </>) },
  { n: '04', t: 'Need to Cancel', body: (
    <>
      <p>Puedes cancelar hasta 12 horas antes sin penalidad.</p>
      <p>Cancelaciones tardías o no-shows consumen tu clase. La Room se cuida entre todas.</p>
    </>) },
  { n: '05', t: 'Personal Items & Room Culture', body: (
    <>
      <p><strong>Respect the Room.</strong></p>
      <p>KNND funciona como un club: con energía, intención y reglas claras.</p>
      <p>Trae lo necesario, llega lista para entrenar y mantén la Room libre de distracciones.
        No está permitido grabar o tomar fotos dentro de la Room sin autorización del equipo KNND.</p>
      <p>Las políticas existen para proteger la experiencia de tod@s, sostener un servicio
        premium y mantener una cultura de respeto, orden y seguridad.</p>
      <p><strong>Train first. Post later.</strong></p>
    </>) },
]

export default function Rules() {
  useReveal()
  const [open, setOpen] = useState(4)
  return (
    <div className="page">
      <section className="phero">
        <img className="phero__bg" src="/assets/rules-hero.jpg" alt="" />
        <div className="phero__scrim" />
        <h1 className="display phero__title">The ‘Rules’</h1>
      </section>

      <div className="rules-wrap reveal">
        {rules.map((r, i) => (
          <div className={`rule ${open === i ? 'is-open' : ''}`} key={r.n}>
            <button className="rule__head" onClick={() => setOpen(open === i ? -1 : i)}>
              <span>{r.n} {r.t}</span>
              <span className="rule__sign">+</span>
            </button>
            <div className="rule__body">
              <div className="rule__inner">{r.body}</div>
            </div>
          </div>
        ))}
      </div>

      <section className="rules-outro reveal">
        <p>If you know, you know<br/>See u in the Hot Room ;)</p>
      </section>
    </div>
  )
}
