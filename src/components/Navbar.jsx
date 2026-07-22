import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (!toggle) return

    const closeMenu = () => setToggle(false)
    window.addEventListener('resize', closeMenu)
    return () => window.removeEventListener('resize', closeMenu)
  }, [toggle])

  return (
    <>
      <nav
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          padding: '16px 20px',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          backgroundColor: '#050816',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: 38,
              height: 38,
              objectFit: 'contain',
              borderRadius: '50%',
            }}
          />

          <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>
            Lewis <span style={{ color: '#7F77DD' }}>| Gitonga</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul
          className="hidden md:flex"
          style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'center',
            gap: 36,
            margin: '0 auto',
            padding: 0,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setActive(link.title)}
                style={{
                  color: active === link.title ? '#fff' : '#9ca3af',
                  textDecoration: 'none',
                  fontSize: 15,
                  transition: 'color 0.2s ease',
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden"
          style={{
            justifySelf: 'end',
          }}
        >
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setToggle((prev) => !prev)}
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.12)',
              background: 'rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <img
              src={toggle ? close : menu}
              alt=""
              style={{
                width: 20,
                height: 20,
              }}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div
            className="md:hidden"
            style={{
              position: 'absolute',
              top: 70,
              right: 16,
              left: 16,
              background:
                'linear-gradient(135deg, rgba(26,26,46,0.97), rgba(15,15,35,0.97))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '16px 18px',
              zIndex: 50,
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }}
          >
            <ul
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => {
                      setToggle(false)
                      setActive(link.title)
                    }}
                    style={{
                      color: active === link.title ? '#fff' : '#9ca3af',
                      textDecoration: 'none',
                      fontSize: 15,
                      display: 'block',
                      padding: '8px 0',
                    }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div style={{ height: 75 }} />
    </>
  )
}

export default Navbar