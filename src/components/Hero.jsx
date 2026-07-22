import { motion } from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
import herobg from '../assets/herobg.png'

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        width: '100%',
      }}
      className="relative w-full h-screen mx-auto"
    >
      <div
        style={{ paddingLeft: '80px' }}
        className="absolute inset-0 top-[120px] flex flex-row items-start gap-8"
      >
        {/* LEFT STREAK */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Lewis</span></h1>
          <p className={`${styles.heroSubText} text-white`}>Full-Stack Engineer <br className="sm:block hidden" />creating scalable web and AI-powered applications</p>
        </div>

        
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero