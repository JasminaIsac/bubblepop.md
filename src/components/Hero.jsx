const HERO_IMG = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648855142-5145b2aa/Screenshot_2026-03-27_at_23-47-04__1__Instagram.png'

export default function Hero() {
  return (
    <header style={{ position: 'relative', minHeight: '100vh', paddingTop: 120, paddingBottom: 80, display: 'flex', alignItems: 'center', overflow: 'hidden' }}>

      {/* Ambient blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: 80, left: -80, width: 380, height: 380, borderRadius: '50%', background: 'rgba(1,79,188,0.18)', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: 80, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'rgba(30,58,138,0.25)', filter: 'blur(120px)' }} />
        <div className="bubble-float glass" style={{ position: 'absolute', top: '18%', right: '8%', width: 88, height: 88, borderRadius: '50%', animationDelay: '0s' }} />
        <div className="bubble-float glass" style={{ position: 'absolute', bottom: '28%', left: '4%', width: 60, height: 60, borderRadius: '50%', animationDelay: '-2s' }} />
        <div className="bubble-float glass" style={{ position: 'absolute', top: '42%', left: '44%', width: 44, height: 44, borderRadius: '50%', animationDelay: '-4s' }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">

          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '8px 16px', background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 9999,
              fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#014fbc',
              width: 'fit-content',
            }}>
              <span style={{ position: 'relative', display: 'flex', width: 8, height: 8 }}>
                <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#014fbc', opacity: 0.75, animation: 'ping 1s cubic-bezier(0,0,0.2,1) infinite' }} />
                <span style={{ position: 'relative', width: 8, height: 8, borderRadius: '50%', background: '#014fbc', display: 'block' }} />
              </span>
              Cel mai bun Bubble Tea din Chișinău
            </div>

            {/* Headline */}
            <h1 className="font-display" style={{ fontSize: 'clamp(52px, 7vw, 96px)', fontWeight: 800, lineHeight: 0.88, letterSpacing: '-2px' }}>
              Descoperă <em style={{ color: '#014fbc', fontStyle: 'italic' }}>magia</em><br />
              în fiecare <span>înghițitură</span>
            </h1>

            <p style={{ fontSize: 18, color: '#9ca3af', lineHeight: 1.7, fontWeight: 300, maxWidth: 480 }}>
              Vino să savurezi o explozie de arome și bule! Street style, energie pură și cele mai fresh waffles din oraș.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <a href="#menu" className="pulse-glow" style={{
                padding: '16px 40px', background: '#014fbc', color: '#fff',
                borderRadius: 9999, fontSize: 17, fontWeight: 700, textDecoration: 'none',
                transition: 'transform 0.2s',
              }}>Explorează Meniul</a>
              <a href="#serial" className="glass" style={{
                padding: '16px 40px', color: '#fff',
                borderRadius: 9999, fontSize: 17, fontWeight: 700, textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <iconify-icon icon="lucide:play"></iconify-icon> Vezi Serialul
              </a>
            </div>
          </div>

          {/* Right — image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(1,79,188,0.2)', filter: 'blur(40px)', borderRadius: '4rem' }} />
              <img src={HERO_IMG} alt="Bubble Tea" style={{
                position: 'relative', zIndex: 1,
                width: '100%', borderRadius: '3.5rem',
                boxShadow: '0 0 60px rgba(1,79,188,0.3)',
                border: '3px solid rgba(255,255,255,0.1)',
                display: 'block',
              }} />
            </div>
            <div className="glass" style={{
              position: 'absolute', top: -24, right: -24, zIndex: 10,
              padding: '12px 20px', borderRadius: 20,
              animation: 'bounce 2s infinite',
            }}>
              <span className="font-display" style={{ color: '#014fbc', fontWeight: 700, fontSize: 16 }}>#StreetStyle</span>
            </div>
            <div className="glass" style={{
              position: 'absolute', bottom: 32, left: -24, zIndex: 10,
              padding: '12px 20px', borderRadius: 20,
              animation: 'bounce 2.5s infinite',
            }}>
              <span className="font-display" style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>#AlwaysFresh</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </header>
  )
}
