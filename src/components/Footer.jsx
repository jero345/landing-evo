import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <p className="footer__tag">Hotness never felt this good</p>
          <a href="tel:+573194975887" className="footer__line">+57 319 497 5887</a>
        </div>

        <div className="footer__col">
          <p className="footer__line">
            <a href="mailto:hello@knndclub.com">HELLO@KNNDCLUB.COM</a>
            <span className="footer__sep"> | </span>
            <a href="https://instagram.com/knnd.club" target="_blank" rel="noreferrer">@KNND.CLUB</a>
          </p>
        </div>

        <div className="footer__col">
          <p className="footer__line">23 LIVING — 3ª PISO<br/>MEDELLÍN, COLOMBIA</p>
        </div>
      </div>

      <div className="footer__mark wordmark">KNND</div>
    </footer>
  )
}
