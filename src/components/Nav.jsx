import { useState } from 'react'

const LOGO = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648847456-e5a15f18/497522679_17927304261051935_8276886152411829680_n.jpg'

const links = [
  { href: '#menu', label: 'Meniu' },
  { href: '#despre', label: 'Despre Noi' },
  { href: '#galerie', label: 'Galerie' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '16px 24px' }}>

        {/* Main bar */}
        <div className="glass" style={{
          borderRadius: 9999,
          padding: '0 32px',
          height: 72,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
            <img src={LOGO} alt="BUBBLEPOP" style={{
              height: 48, width: 48, borderRadius: '50%', objectFit: 'cover',
              border: '2px solid #014fbc',
            }} />
            <span className="font-display" style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px' }}>
              BUBBLEPOP
            </span>
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hide-mobile">
            {links.map(l => (
              <a key={l.href} href={l.href} style={{
                color: '#d1d5db', fontWeight: 500, textDecoration: 'none', fontSize: 15,
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = '#fff'}
                onMouseLeave={e => e.target.style.color = '#d1d5db'}
              >{l.label}</a>
            ))}
            <a href="#contact" style={{
              padding: '10px 24px', background: '#014fbc', color: '#fff',
              borderRadius: 9999, fontWeight: 700, textDecoration: 'none', fontSize: 15,
              transition: 'all 0.2s',
            }}
              onMouseEnter={e => { e.target.style.background = '#fff'; e.target.style.color = '#014fbc' }}
              onMouseLeave={e => { e.target.style.background = '#014fbc'; e.target.style.color = '#fff' }}
            >Locații</a>
          </div>

          {/* Hamburger */}
          <button
            className="show-mobile"
            onClick={() => setOpen(!open)}
            style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 28, display: 'none' }}
          >
            <iconify-icon icon={open ? 'lucide:x' : 'lucide:menu'}></iconify-icon>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="glass" style={{
            marginTop: 8, borderRadius: 24, padding: '24px 28px',
            display: 'flex', flexDirection: 'column', gap: 16,
          }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                color: '#d1d5db', fontWeight: 500, textDecoration: 'none', fontSize: 16,
              }}>{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} style={{
              padding: '12px 24px', background: '#014fbc', color: '#fff',
              borderRadius: 9999, fontWeight: 700, textDecoration: 'none', textAlign: 'center',
            }}>Locații</a>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
