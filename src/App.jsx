import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import { ScrollToTop } from './hooks.js'
import Home from './pages/Home.jsx'
import Method from './pages/Method.jsx'
import Classes from './pages/Classes.jsx'
import Rules from './pages/Rules.jsx'
import Schedule from './pages/Schedule.jsx'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/method" element={<Method />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
