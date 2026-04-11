import { useState } from 'react'

const LOCATIONS = [
  {
    name: 'BUBBLEPOP (general)',
    address: 'Str. Mitropolit Gavriil Bănulescu-Bodoni 47, Chișinău',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43514.39533203718!2d28.75726103782654!3d47.027480481473425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d0035019fb1%3A0x517f4ef3443f4c02!2sBUBBLEPOP!5e0!3m2!1sen!2s!4v1775848949629!5m2!1sen!2s',
  },
  {
    name: 'Port Mall',
    address: 'Str. Mihai Sadoveanu 42/6, Chișinău',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4071.60050512454!2d28.885465914406623!3d47.070298138364564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97d4115d8be31%3A0x316469e1902d0689!2sPort%20Mall!5e0!3m2!1sen!2s!4v1775849001295!5m2!1sen!2s',
  },
  {
    name: 'Shopping MallDova',
    address: 'Str. Arborilor 21, etaj 4, Chișinău',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2720.814359957046!2d28.83814037640666!3d47.00461792935322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97ea01a3e6089%3A0x8b7bd74bc15dd0cf!2sShopping%20MallDova!5e0!3m2!1sen!2s!4v1775849032330!5m2!1sen!2s',
  },
  {
    name: 'Vara Vara Aqua City',
    address: 'Str.Mihai Sadoveanu 42/2, Chișinău',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6100.372985460089!2d28.883268969869057!3d47.07147566428088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97da05d8c8c8f%3A0x6b2038c320f3434e!2sVara%20Vara%20Aquacity!5e0!3m2!1sen!2s!4v1775849058079!5m2!1sen!2s',
  },
]

const SOCIALS = [
  { icon: 'mdi:instagram', href: 'https://www.instagram.com/bubblepop.md/' },
  { icon: 'ic:baseline-tiktok', href: 'https://www.tiktok.com/@bubblepop.md' },
  { icon: 'mdi:facebook', href: 'https://www.facebook.com/bubblepop.md' },
]

export default function Contact() {
  const [activeIdx, setActiveIdx] = useState(0)

  return (
    <section id="contact" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'stretch' }} className="contact-grid">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-1px', lineHeight: 1.05 }}>
                Cum ne <br /><span style={{ color: '#014fbc' }}>găsești?</span>
              </h2>
              <p style={{ fontSize: 17, color: '#9ca3af', fontWeight: 300, lineHeight: 1.7 }}>
                Suntem prezenți în cele mai vibrante puncte din Chișinău. Alege locația cea mai apropiată de tine.
              </p>
            </div>

            {/* Location cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {LOCATIONS.map((loc, i) => {
                const isActive = activeIdx === i
                return (
                  <button
                    key={loc.name}
                    onClick={() => setActiveIdx(i)}
                    style={{
                      width: '100%', textAlign: 'left', cursor: 'pointer', border: 'none',
                      padding: '18px 24px', borderRadius: 20,
                      background: isActive ? 'rgba(1,79,188,0.15)' : 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(12px)',
                      outline: isActive ? '1px solid rgba(1,79,188,0.4)' : '1px solid rgba(255,255,255,0.07)',
                      transition: 'all 0.25s',
                      color: 'inherit',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
                        background: isActive ? 'rgba(1,79,188,0.3)' : 'rgba(255,255,255,0.08)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        transition: 'background 0.25s',
                      }}>
                        <iconify-icon icon="lucide:map-pin" style={{ fontSize: 20, color: isActive ? '#fff' : '#9ca3af' }}></iconify-icon>
                      </div>
                      <div>
                        <h4 style={{ fontSize: 16, fontWeight: 700, marginBottom: 2, color: isActive ? '#fff' : '#fff' }}>{loc.name}</h4>
                        <p style={{ fontSize: 13, color: '#9ca3af' }}>{loc.address}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Socials + CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                {SOCIALS.map(s => (
                  <a key={s.icon} href={s.href} target="_blank" rel="noreferrer"
                    className="glass"
                    style={{
                      width: 52, height: 52, borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 24, color: '#fff', textDecoration: 'none',
                      transition: 'background 0.2s, transform 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#014fbc'; e.currentTarget.style.transform = 'scale(1.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.transform = 'scale(1)' }}
                  >
                    <iconify-icon icon={s.icon}></iconify-icon>
                  </a>
                ))}
              </div>
              <a href="https://www.instagram.com/bubblepop.md/" target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 12,
                  padding: '18px 32px', background: '#fff', color: '#0a2551',
                  borderRadius: 9999, fontSize: 16, fontWeight: 700, textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#014fbc'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#0a2551' }}
              >
                Contactează-ne pentru comandă
                <iconify-icon icon="lucide:arrow-right"></iconify-icon>
              </a>
            </div>
          </div>

          {/* Right — Google Maps */}
          <div className="glass" style={{ borderRadius: 40, overflow: 'hidden', padding: 12, minHeight: 500 }}>
            {LOCATIONS.map((loc, i) => (
              <iframe
                key={loc.name}
                src={loc.mapSrc}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  borderRadius: 28,
                  display: activeIdx === i ? 'block' : 'none',
                  minHeight: 460,
                  filter: 'hue-rotate(180deg) invert(90%) brightness(95%) contrast(90%)',
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={loc.name}
              />
            ))}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
