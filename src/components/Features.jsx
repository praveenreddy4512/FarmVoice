const features = [
  { icon: '📈', title: 'Live Mandi Prices', desc: 'Real-time prices for 100+ commodities from mandis across India. Updated every 30 minutes.' },
  { icon: '🌦️', title: 'Weather & Alerts', desc: 'Hyperlocal weather forecasts with rain alerts, temperature, humidity, and wind.' },
  { icon: '🤖', title: 'AI Farm Assistant', desc: 'Ask any farming question in Telugu, Hindi, or English. Get instant expert answers.' },
  { icon: '🎙️', title: 'Voice in Your Language', desc: 'Speak in Telugu or Hindi — the app understands and responds in your language.' },
  { icon: '🔔', title: 'Smart Notifications', desc: 'Get alerts when prices change, rain is expected, and daily farming tips.' },
  { icon: '🌾', title: 'Your Crops Dashboard', desc: 'Select your favorite crops and see their prices first. Track trends easily.' },
]

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Everything a Farmer Needs</h2>
          <p>Built to solve real problems faced by Indian farmers every day</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
