import { useReveal } from '../hooks.js'
import './pages.css'

const days = [
  { name: 'Today', num: 4, today: true },
  { name: 'Fri', num: 5 },
  { name: 'Sat', num: 6 },
  { name: 'Sun', num: 7 },
  { name: 'Mon', num: 8, muted: true },
  { name: 'Tue', num: 9 },
  { name: 'Wed', num: 10 },
]

export default function Schedule() {
  useReveal()
  return (
    <div className="page">
      <section className="phero">
        <img className="phero__bg" src="/assets/schedule-hero.jpg" alt="" />
        <div className="phero__scrim" />
        <h1 className="display phero__title">The Schedule</h1>
      </section>

      <div className="sched reveal">
        <div className="sched__top"><a className="sched__account" href="#">My Account</a></div>

        <div className="sched__bar">
          <h2 className="sched__h">Find a Class</h2>
          <div className="sched__filters">
            <button className="sched__filter">Class Type ▾</button>
            <button className="sched__filter">Instructor ▾</button>
          </div>
        </div>

        <div className="sched__month">
          <strong>June</strong>
          <span className="sched__cal-link">🗓 Full Calendar</span>
        </div>

        <div className="sched__days">
          <button className="sched__arrow" aria-label="Previous">‹</button>
          {days.map((d) => (
            <button key={d.num} className={`sched__day ${d.today ? 'is-today' : ''} ${d.muted ? 'is-muted' : ''}`}>
              <span className="sched__day-name">{d.name}</span>
              <span className="sched__day-num">{d.num}</span>
            </button>
          ))}
          <button className="sched__arrow" aria-label="Next">›</button>
        </div>

        <div className="sched__panel">
          <p className="sched__date">Thursday, Jun 4</p>
          <p className="sched__note">All dates and times are displayed in the location's timezone.</p>
          <p className="sched__empty">There are no available classes on June 4, 2026</p>
          <p className="sched__next">Next available class</p>
          <a className="sched__pill" href="#">Go to June 5, 2026</a>

          <div className="sched__powered">
            Powered by
            <strong>mindbody</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
