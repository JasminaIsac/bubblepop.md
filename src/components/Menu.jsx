import { useState } from 'react'
import menuData from '../data/menu.json'

function ProductCard({ item }) {
  return (
    <div className="glass hover-card" style={{
      borderRadius: 48, padding: 24,
      display: 'flex', flexDirection: 'column',
      border: '1px solid rgba(255,255,255,0.06)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Accent glow on hover handled by hover-card */}

      {/* Image */}
      <div style={{ borderRadius: 36, overflow: 'hidden', marginBottom: 20, background: 'rgba(255,255,255,0.04)', aspectRatio: '1/1' }}>
        <img src={item.image} alt={item.name} style={{
          width: '100%', height: '100%', objectFit: 'cover',
          transition: 'transform 0.6s ease', display: 'block',
        }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
      </div>

      {/* Name + subtitle */}
      <div style={{ marginBottom: 16 }}>
        <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.3px', marginBottom: 4 }}>
          {item.name}
        </h3>
        <p style={{ fontSize: 10, color: '#014fbc', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>
          {item.subtitle}
        </p>
      </div>

      {/* Ingredients */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8,
        padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.08)', borderBottom: '1px solid rgba(255,255,255,0.08)',
        marginBottom: 16,
      }}>
        {item.ingredients.map(ing => (
          <div key={ing.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
            <iconify-icon icon={ing.icon} style={{ fontSize: 22 }}></iconify-icon>
            <span style={{ fontSize: 9, color: '#9ca3af', textAlign: 'center' }}>{ing.label}</span>
          </div>
        ))}
      </div>

      {/* Special flavour */}
      <div className="glass" style={{ padding: '12px 16px', borderRadius: 16, border: '1px solid rgba(255,255,255,0.06)' }}>
        <p style={{ fontSize: 9, color: '#6b7280', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.15em', marginBottom: 4 }}>
          Special Flavour
        </p>
        <p style={{ fontSize: 13, fontWeight: 500 }}>{item.special}</p>
      </div>
    </div>
  )
}

export default function Menu() {
  const [activeId, setActiveId] = useState('fruity')
  const active = menuData.categories.find(c => c.id === activeId)

  return (
    <section id="menu" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.025)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 64px' }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 800, fontStyle: 'italic', letterSpacing: '-1px', marginBottom: 16 }}>
            Meniul BUBBLEPOP
          </h2>
          <p style={{ fontSize: 17, color: '#9ca3af', fontWeight: 300, lineHeight: 1.6 }}>
            Alege experiența ta favorită din selecția noastră premium de băuturi și deserturi.
          </p>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 12, marginBottom: 56 }}>
          {menuData.categories.map(cat => {
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                style={{
                  padding: '12px 28px',
                  borderRadius: 9999,
                  fontWeight: 700,
                  fontSize: 15,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                  ...(isActive ? {
                    background: '#014fbc',
                    color: '#fff',
                    transform: 'scale(1.06)',
                    boxShadow: '0 8px 24px rgba(1,79,188,0.35)',
                  } : {
                    background: 'rgba(255,255,255,0.05)',
                    color: '#9ca3af',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }),
                }}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {active?.items.map(item => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
