export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <div className="container" style={{ maxWidth: 800, padding: '120px 24px 60px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1B4332', marginBottom: 12 }}>Privacy Policy</h1>
        <p style={{ color: '#8B9A8D', fontSize: '0.9rem', marginBottom: 40 }}>Last updated: August 30, 2026</p>
        <div style={{ lineHeight: 1.8, color: '#52796F', fontSize: '0.95rem' }}>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1B4332', marginTop: 32, marginBottom: 12 }}>1. Introduction</h2>
          <p style={{ marginBottom: 16 }}>FarmVoice ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application FarmVoice (the "App").</p>

          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1B4332', marginTop: 32, marginBottom: 12 }}>2. Information We Collect</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}><strong>Location Data:</strong> Your approximate location (city/district) for weather and mandi prices. Not stored on our servers.</li>
            <li style={{ marginBottom: 8 }}><strong>Device Information:</strong> Device model, OS version for analytics and crash reporting.</li>
            <li style={{ marginBottom: 8 }}><strong>Push Notification Token:</strong> FCM token for weather alerts and price updates (only if you opt in).</li>
          </ul>

          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1B4332', marginTop: 32, marginBottom: 12 }}>3. How We Use Your Information</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}>Provide localized weather and mandi prices</li>
            <li style={{ marginBottom: 8 }}>Send push notifications (only if you opt in)</li>
            <li style={{ marginBottom: 8 }}>Power the AI assistant with relevant context</li>
            <li style={{ marginBottom: 8 }}>Improve the App through anonymized analytics</li>
          </ul>

          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1B4332', marginTop: 32, marginBottom: 12 }}>4. Data Sharing</h2>
          <p style={{ marginBottom: 16 }}>We do <strong>not</strong> sell, trade, or rent your personal information to third parties. We may share anonymized, aggregated data that cannot identify you.</p>

          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1B4332', marginTop: 32, marginBottom: 12 }}>5. Third-Party Services</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}><strong>Google Firebase:</strong> Push notifications and crash analytics.</li>
            <li style={{ marginBottom: 8 }}><strong>Supabase:</strong> Secure data storage.</li>
            <li style={{ marginBottom: 8 }}><strong>Open-Meteo:</strong> Weather data (no personal data shared).</li>
            <li style={{ marginBottom: 8 }}><strong>data.gov.in:</strong> Mandi price data (Government open data).</li>
            <li style={{ marginBottom: 8 }}><strong>Groq:</strong> AI assistant responses.</li>
          </ul>

          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1B4332', marginTop: 32, marginBottom: 12 }}>6. Your Rights</h2>
          <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
            <li style={{ marginBottom: 8 }}>Opt out of push notifications through device settings</li>
            <li style={{ marginBottom: 8 }}>Request deletion of your data by contacting us</li>
          </ul>

          <h2 style={{ fontSize: '1.3rem', fontWeight: 600, color: '#1B4332', marginTop: 32, marginBottom: 12 }}>7. Contact Us</h2>
          <div style={{ background: '#f0f7f4', borderRadius: 12, padding: 20, border: '1px solid #d4e8dc' }}>
            <p style={{ marginBottom: 4 }}><strong>Email:</strong> saipraveenreddy258@gmail.com</p>
            <p><strong>App:</strong> FarmVoice (com.farmvoice.farmvoice)</p>
          </div>
        </div>
        <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #d4e8dc' }}>
          <a href="/" style={{ color: '#2D6A4F', textDecoration: 'none', fontWeight: 600 }}>← Back to Home</a>
        </div>
      </div>
    </div>
  )
}
