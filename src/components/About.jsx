const IMGS = [
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648857053-cae30939/Screenshot_2026-03-27_at_23-47-20__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648866617-3dea087e/Screenshot_2026-03-27_at_23-50-03__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648858575-46c738c7/Screenshot_2026-03-27_at_23-47-29__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774652039149-fe7aad80/Screenshot_2026-03-27_at_23-49-26__1__Instagram.png',
]

export default function About() {
  return (
    <section id="despre" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 80 }} className="about-grid">

          {/* Image mosaic */}
          <div style={{ flex: 1, position: 'relative', minWidth: 0 }}>
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(1,79,188,0.08)', filter: 'blur(80px)', zIndex: 0 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <img src={IMGS[0]} alt="" style={{ borderRadius: 28, width: '100%', aspectRatio: '4/5', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <img src={IMGS[1]} alt="" style={{ borderRadius: 28, width: '100%', aspectRatio: '1/1', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 40 }}>
                <img src={IMGS[2]} alt="" style={{ borderRadius: 28, width: '100%', aspectRatio: '1/1', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                <img src={IMGS[3]} alt="" style={{ borderRadius: 28, width: '100%', aspectRatio: '4/5', objectFit: 'cover', transition: 'transform 0.4s' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 36 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-1px' }}>
                Mai mult decât<br />
                <span style={{ color: '#014fbc' }}>o simplă băutură</span>
              </h2>
              <p style={{ fontSize: 17, color: '#9ca3af', lineHeight: 1.75, fontWeight: 300 }}>
                La BUBBLEPOP, suntem dedicați să transformăm fiecare vizită într-un moment de bucurie pură. Mixăm culori, arome și texturi pentru a crea băutura perfectă pentru stilul tău de viață activ.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {[
                { icon: 'lucide:zap', title: 'Dinamism', desc: 'Inspirat de viața urbană și ritmul orașului.' },
                { icon: 'lucide:heart', title: 'Creativitate', desc: 'Fiecare produs este o operă de artă vizuală și gustativă.' },
              ].map(card => (
                <div key={card.title} className="glass hover-card" style={{ padding: 28, borderRadius: 28 }}>
                  <iconify-icon icon={card.icon} style={{ fontSize: 32, color: '#014fbc', display: 'block', marginBottom: 12 }}></iconify-icon>
                  <h4 className="font-display" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{card.title}</h4>
                  <p style={{ fontSize: 14, color: '#9ca3af', lineHeight: 1.6 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { flex-direction: column !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
