import {useState, useRef, useEffect} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'

import {styles} from '../styles'
import {EarthCanvas, StarsCanvas} from './canvas'
import {SectionWrapper} from '../hoc'
import {slideIn} from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const serviceId = 'service_jbczz1r'
  const templateId = 'template_obuvjy9'
  const publicKey = '5Taz4EznQ3zZqD_F8'

  useEffect(() => {
    emailjs.init(publicKey)
  }, [publicKey])

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const templateParams = {
      from_name: form.name,
      to_name: 'Lewis Gitonga',
      from_email: form.email,
      reply_to: form.email,
      to_email: 'gitongalewis2026@gmail.com',
      message: form.message,
      name: form.name,
      email: form.email,
      subject: `Portfolio contact from ${form.name}`,
    }

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, templateParams, publicKey)
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')
        setForm({
          name: '',
          email: '',
          message: '',
        })
        return
      }

      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )

      window.location.href = `mailto:gitongalewis2026@gmail.com?subject=${subject}&body=${body}`
      setLoading(false)
      setForm({
        name: '',
        email: '',
        message: '',
      })
      alert('Your email app should open with your message. If it does not, please email me directly at gitongalewis2026@gmail.com.')
    } catch (error) {
      setLoading(false)
      console.error('EmailJS error:', error)
      const errorText = error?.text || error?.message || 'The service rejected the request.'
      alert(`The email service is unavailable right now. ${errorText}`)
    }
  }
  return (
    <div className="relative flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
      <div className="pointer-events-none absolute inset-0 z-0">
        <StarsCanvas />
      </div>

      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="relative z-10 flex-[0.75] rounded-2xl bg-black-100 p-8"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

  {/* Email */}
  <a
    href="mailto:gitongalewis2026@gmail.com"
    className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10"
  >
    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20 text-xl">
      📧
    </div>

    <p className="text-xs uppercase tracking-wider text-secondary">
      Email
    </p>

    <p className="mt-1 text-xs font-medium text-white break-all">
      gitongalewis2026@gmail.com
    </p>
  </a>

  {/* Phone */}
  <a
    href="tel:+254711527211"
    className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500/10"
  >
    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20 text-xl">
      📱
    </div>

    <p className="text-xs uppercase tracking-wider text-secondary">
      Phone
    </p>

    <p className="mt-1 text-xs font-medium text-white">
      +254 711 527 211
    </p>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/toshlewi"
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col items-center rounded-xl border border-white/10 bg-white/5 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/10"
  >
    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20 text-xl">
      💻
    </div>

    <p className="text-xs uppercase tracking-wider text-secondary">
      GitHub
    </p>

    <p className="mt-1 text-xs font-medium text-white">
      @toshlewi
    </p>
  </a>

</div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="relative z-10 h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")