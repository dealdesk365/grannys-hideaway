import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = "Granny's Hideaway | Northern Michigan Vacation Rental"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A1A1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Burnt orange accent bars */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: '#C85A1E', display: 'flex' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '8px', background: '#C85A1E', display: 'flex' }} />

        {/* Teal circle accent */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: '#2A9D8F',
          opacity: 0.08,
          display: 'flex',
        }} />

        {/* Tag */}
        <div style={{ color: '#D4A017', fontSize: '16px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '20px', display: 'flex' }}>
          Mancelona, Michigan · Sleeps 7
        </div>

        {/* Title */}
        <div style={{ color: '#FAF3E0', fontSize: '72px', fontWeight: 900, textAlign: 'center', lineHeight: 1.1, marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Granny&apos;s Hideaway
        </div>

        {/* Divider */}
        <div style={{ width: '80px', height: '4px', background: '#C85A1E', marginBottom: '24px', display: 'flex' }} />

        {/* Tagline */}
        <div style={{ color: 'rgba(250,243,224,0.75)', fontSize: '26px', textAlign: 'center', display: 'flex' }}>
          Your Northern Michigan Base Camp · $200/night
        </div>

        {/* Domain */}
        <div style={{ position: 'absolute', bottom: '28px', color: 'rgba(212,160,23,0.6)', fontSize: '16px', letterSpacing: '0.15em', display: 'flex' }}>
          grannyshideaway.com
        </div>
      </div>
    ),
    { ...size }
  )
}
