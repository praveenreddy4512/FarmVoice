export default function Hero() {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo"><span className="logo-icon">🌾</span>FarmVoice</a>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#download">Download</a></li>
            <li><a href="mailto:saipraveenreddy258@gmail.com">Contact</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>
      </nav>
      <section className="hero">
        <div className="container">
          <span className="hero-badge">🇮🇳 Made for Indian Farmers</span>
          <h1>Your Farming <span>Assistant</span><br />in Your Language</h1>
          <p>Get real-time mandi prices, weather alerts, and AI-powered farming advice — all in Telugu, Hindi, and English. Built for farmers, by understanding farmers.</p>
          <div className="hero-buttons">
            <a href="https://play.google.com/store/apps/details?id=com.farmvoice.farmvoice" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81M6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z"/></svg>
              Get on Play Store
            </a>
            <a href="#features" className="btn btn-secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="stat-number">100+</div><div className="stat-label">Crops Tracked</div></div>
            <div className="stat"><div className="stat-number">3</div><div className="stat-label">Languages</div></div>
            <div className="stat"><div className="stat-number">24/7</div><div className="stat-label">Live Prices</div></div>
            <div className="stat"><div className="stat-number">Free</div><div className="stat-label">Always</div></div>
          </div>
        </div>
      </section>
    </>
  )
}
