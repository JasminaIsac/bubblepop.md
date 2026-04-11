import { useRef, useState } from 'react'

const CARD_W = 340
const GAP = 24

// ?cr=1&v=14 = standard Instagram embed params (same as oEmbed API generates)
const makeEmbedUrl = (shortcode) =>
  `https://www.instagram.com/p/${shortcode}/embed/captioned/?cr=1&v=14&wp=${CARD_W}`

const EPISODES = [
  { num: '01', embedUrl: makeEmbedUrl('DUTFq_EAh2J') },
  { num: '02', embedUrl: makeEmbedUrl('DUa0EcCgqSO') },
  { num: '03', embedUrl: makeEmbedUrl('DUlHyy2guay') },
  { num: '04', embedUrl: makeEmbedUrl('DUs1oF_gvz2') },
  { num: '05', embedUrl: makeEmbedUrl('DU3KL22AtIH') },
  { num: '06', embedUrl: makeEmbedUrl('DU-3j68AjFO') },
  { num: '07', embedUrl: makeEmbedUrl('DVJK95Wgptq') },
  { num: '08', embedUrl: makeEmbedUrl('DVi5hOTAo1t') },
]

export default function Serial() {
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onScroll = () => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
    setCanPrev(el.scrollLeft > 4)
    setCanNext(el.scrollLeft < max - 4)
  }

  const scroll = (dir) => {
    trackRef.current?.scrollBy({ left: dir * (CARD_W + GAP), behavior: 'smooth' })
  }

  const arrowStyle = (active) => ({
    position: 'absolute', top: '50%', transform: 'translateY(-50%)',
    zIndex: 10, width: 48, height: 48, borderRadius: '50%',
    background: active ? '#014fbc' : 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: active ? '#fff' : 'rgba(255,255,255,0.25)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: active ? 'pointer' : 'default',
    transition: 'all 0.2s', backdropFilter: 'blur(8px)', fontSize: 20,
  })

  return (
    <section id="serial" style={{ padding: '100px 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 800, letterSpacing: '-1px' }}>
            Serialul <span style={{ color: '#014fbc' }}>BUBBLEPOP</span>
          </h2>
          <a
            href="https://www.instagram.com/bubblepop.md/"
            target="_blank" rel="noreferrer"
            className="glass"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              padding: '12px 24px', borderRadius: 9999,
              fontWeight: 700, fontSize: 15, color: '#fff', textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.15)', transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#014fbc'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.03)'}
          >
            <iconify-icon icon="mdi:instagram" style={{ fontSize: 22 }}></iconify-icon>
            @bubblepop.md
          </a>
        </div>

        {/* Carousel */}
        <div style={{ position: 'relative' }}>

          {/* Left arrow */}
          <button onClick={() => scroll(-1)} disabled={!canPrev} style={{ ...arrowStyle(canPrev), left: -20 }} aria-label="Anterior">
            <iconify-icon icon="lucide:arrow-left"></iconify-icon>
          </button>

          {/* Right arrow */}
          <button onClick={() => scroll(1)} disabled={!canNext} style={{ ...arrowStyle(canNext), right: -20 }} aria-label="Următor">
            <iconify-icon icon="lucide:arrow-right"></iconify-icon>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            onScroll={onScroll}
            className="hide-scrollbar"
            style={{
              display: 'flex', gap: GAP, overflowX: 'auto',
              scrollSnapType: 'x mandatory', alignItems: 'flex-start',
              paddingLeft: 4, paddingRight: 4, paddingBottom: 8,
            }}
          >
            {EPISODES.map(ep => (
              <div
                key={ep.num}
                style={{ flexShrink: 0, scrollSnapAlign: 'start', width: CARD_W }}
              >
                {/* Label above iframe */}
                <p style={{ color: '#014fbc', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em', marginBottom: 10 }}>
                  EPISODUL {ep.num}
                </p>

                {/*
                  Direct Instagram /embed/ iframe — no JS needed, video plays inline.
                  Instagram's embed endpoint renders a responsive player
                  at ~400px wide; we cap it to the card width.
                  Height ~560 covers a standard Reel card with actions bar.
                */}
                <div style={{
                  borderRadius: 20, overflow: 'hidden',
                  background: '#000',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  height: 560,
                }}>
                  <iframe
                    src={ep.embedUrl}
                    title={`Episodul ${ep.num}`}
                    width={CARD_W}
                    height={560}
                    style={{ border: 'none', display: 'block' }}
                    scrolling="no"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowTransparency
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div style={{ marginTop: 20, height: 3, background: 'rgba(255,255,255,0.08)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${progress * 100}%`,
              background: '#014fbc', borderRadius: 99,
              transition: 'width 0.15s ease',
            }} />
          </div>
        </div>

      </div>
    </section>
  )
}
