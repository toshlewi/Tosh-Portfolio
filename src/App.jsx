import { BrowserRouter as Router } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components'

const App = () => {
  return (
    <Router>
      <div className='relative z-0 bg-primary'>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
        </div>
      </div>
    </Router>
  )
}

export default App
