const IMAGES = [
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648855142-5145b2aa/Screenshot_2026-03-27_at_23-47-04__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648857053-cae30939/Screenshot_2026-03-27_at_23-47-20__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648858575-46c738c7/Screenshot_2026-03-27_at_23-47-29__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648860133-c8370353/Screenshot_2026-03-27_at_23-47-39__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648861379-cabcb9f1/Screenshot_2026-03-27_at_23-48-25__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648862433-b3085230/Screenshot_2026-03-27_at_23-49-07__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648863442-97e988ea/Screenshot_2026-03-27_at_23-49-26__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648864416-143558a8/Screenshot_2026-03-27_at_23-49-36__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648865657-08ea15d9/Screenshot_2026-03-27_at_23-49-54__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648866617-3dea087e/Screenshot_2026-03-27_at_23-50-03__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648867652-770d696b/Screenshot_2026-03-27_at_23-50-21__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648868640-398d4667/Screenshot_2026-03-27_at_23-50-31__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648869588-05ee5b4b/Screenshot_2026-03-27_at_23-50-49__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648870777-ac767f50/Screenshot_2026-03-27_at_23-51-13__1__Instagram.png',
  'https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/548a04d5-5023-43c6-94ab-47a8eecf68a2/1774648871791-75c74858/Screenshot_2026-03-27_at_23-51-45__2__Instagram.png',
]

export default function Gallery() {
  return (
    <section id="galerie" style={{ padding: '100px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, marginBottom: 56, flexWrap: 'wrap' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-1px' }}>
              Vibe-ul <span style={{ color: '#014fbc' }}>BOP</span>
            </h2>
            <p style={{ fontSize: 17, color: '#9ca3af', marginTop: 12, lineHeight: 1.5 }}>
              Fiecare colț al localelor noastre este creat pentru a inspira.
            </p>
          </div>
          <a
            href="https://www.instagram.com/bubblepop.md/"
            target="_blank" rel="noreferrer"
            className="glass"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 24px', borderRadius: 9999,
              fontWeight: 700, fontSize: 15, color: '#fff', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              transition: 'background 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#014fbc'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
          >
            @bubblepop.md
            <iconify-icon icon="mdi:instagram" style={{ fontSize: 22 }}></iconify-icon>
          </a>
        </div>

        {/* Masonry — CSS columns */}
        <div style={{ columns: '4 240px', gap: 16 }}>
          {IMAGES.map((src, i) => (
            <div key={i} style={{ breakInside: 'avoid', marginBottom: 16, borderRadius: 20, overflow: 'hidden' }}>
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                style={{ width: '100%', display: 'block', transition: 'transform 0.5s' }}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
