import { Link } from 'react-router-dom'
import { useReveal } from '../hooks.js'
import './pages.css'

const pillars = [
  { t: 'Heat', d: 'El calor infrarrojo no es un detalle. Es parte de la firma KNND. Eleva la experiencia, aumenta la intensidad y transforma la sensación del entrenamiento.' },
  { t: 'Control', d: 'Cada movimiento tiene una razón. Alineación, técnica y ejecución limpia para que el cuerpo trabaje con precisión.' },
  { t: 'Strength', d: 'KNND suma fuerza, carga, resistencia y estructura al universo del pilates. Más reto. Más progreso. Más estándar.' },
  { t: 'Glow', d: 'El final importa. Sales entrenada, no híper-cansada. Hot, impecable, fuerte y en el mejor mood posible.' },
]

export default function Method() {
  useReveal()
  return (
    <div className="page">
      <section className="phero">
        <img className="phero__bg" src="/assets/method-hero.jpg" alt="" />
        <div className="phero__scrim" />
        <h1 className="display phero__title">The Method</h1>
      </section>

      <section className="method-block reveal">
        <h2 className="display method-block__title">KNND50<sup>™</sup></h2>
        <p>El método KNND combina calor infrarrojo, precisión técnica, fuerza,
          control y recuperación en sesiones de 50 minutos diseñadas para
          retarte sin perder el acabado.</p>
        <p>No se trata de moverte por moverte.<br/>
          Se trata de entrar a la Room, trabajar con intención y salir diferente:
          más fuerte, más enfocada, más ON.</p>
      </section>

      <section className="pillars">
        <img className="pillars__bg" src="/assets/method-pillars.jpg" alt="" />
        <div className="pillars__scrim" />
        <div className="pillars__inner reveal">
          <h2 className="display pillars__title">Method Pillars</h2>
          {pillars.map((p) => (
            <div className="pillar" key={p.t}>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </div>
          ))}
          <Link to="/schedule" className="btn btn--light">Book a Session</Link>
        </div>
      </section>

      <section className="quote reveal">
        <p>“No se trata de sudar por sudar. Se trata de controlar el movimiento, manejar la carga y terminar mejor de lo que entraste.”</p>
      </section>

      <section className="director reveal">
        <h4>Kiara Castillo</h4>
        <span>KNND Pilates — Method Director</span>
      </section>
    </div>
  )
}
