import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{ backgroundColor: '#FAF3E0', minHeight: '100vh' }} className="flex flex-col items-center justify-center px-6 text-center">
      <p style={{ color: '#C85A1E', fontSize: '120px', lineHeight: 1, fontWeight: 900 }}>404</p>
      <div style={{ width: '80px', height: '4px', backgroundColor: '#D4A017', margin: '16px auto 24px' }} />
      <h1 style={{ color: '#1A1A1A', fontSize: '28px', fontWeight: 700, marginBottom: '12px' }}>
        Page Not Found
      </h1>
      <p style={{ color: '#555', marginBottom: '32px', maxWidth: '400px', lineHeight: 1.6 }}>
        This page doesn&apos;t exist — but Granny&apos;s Hideaway does, and it&apos;s ready for your next adventure.
      </p>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          href="/book"
          style={{ backgroundColor: '#C85A1E', color: '#FAF3E0', padding: '12px 28px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', textDecoration: 'none' }}
        >
          Book Your Stay
        </Link>
        <Link
          href="/"
          style={{ border: '2px solid #C85A1E', color: '#C85A1E', padding: '12px 28px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '14px', textDecoration: 'none' }}
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
