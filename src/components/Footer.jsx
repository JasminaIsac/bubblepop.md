const LOGO = 'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648847456-e5a15f18/497522679_17927304261051935_8276886152411829680_n.jpg'

export default function Footer() {
  return (
    <footer className="glass" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '28px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>

        {/* Logo + title + slogan — all in one row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <img src={LOGO} alt="BUBBLEPOP" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: '2px solid #014fbc', flexShrink: 0 }} />
          <p className="font-display" style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.08em', color: '#fff' }}>BUBBLEPOP</p>
          <div style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.15)' }} />
          <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.4 }}>
            Descoperă magia în fiecare înghițitură cu BUBBLEPOP! 🫧
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.07)' }} />

        {/* Copyright row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: '#6b7280', flexWrap: 'wrap', gap: 8 }}>
          <span>© 2026 BUBBLEPOP. Toate drepturile rezervate.</span>
          <span>Creat de <strong style={{ color: '#fff' }}>AiXiDev</strong></span>
        </div>

      </div>
    </footer>
  )
}
