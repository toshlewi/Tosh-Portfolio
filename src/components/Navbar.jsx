import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { menu, close } from '../assets'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <nav
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          padding: '18px 48px',
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
          <img
            src={toggle ? close : menu}
            alt="menu"
            style={{
              width: 28,
              height: 28,
              cursor: 'pointer',
            }}
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {/* Mobile Dropdown */}
        {toggle && (
          <div
            className="md:hidden"
            style={{
              position: 'absolute',
              top: 75,
              right: 20,
              background:
                'linear-gradient(135deg, rgba(26,26,46,0.95), rgba(15,15,35,0.95))',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '18px 24px',
              minWidth: 180,
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
                      padding: '6px 0',
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