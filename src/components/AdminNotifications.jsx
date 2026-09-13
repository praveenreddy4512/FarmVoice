import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'https://farmer-app-backend-flax.vercel.app'

function AdminNotifications() {
  const [sessionToken, setSessionToken] = useState(() => sessionStorage.getItem('farmvoice_admin_session') || '')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [type, setType] = useState('general')
  const [profileIds, setProfileIds] = useState('')
  const [result, setResult] = useState(null)
  const [sending, setSending] = useState(false)
  const [loggingIn, setLoggingIn] = useState(false)

  async function login(event) {
    event.preventDefault()
    setLoggingIn(true)
    setResult(null)
    try {
      const response = await fetch(`${API_BASE}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const payload = await response.json()
      if (!response.ok) throw new Error(payload.error?.message || 'Login failed')
      sessionStorage.setItem('farmvoice_admin_session', payload.token)
      setSessionToken(payload.token)
      setPassword('')
    } catch (error) {
      setResult({ ok: false, message: error.message })
    } finally {
      setLoggingIn(false)
    }
  }

  function logout() {
    sessionStorage.removeItem('farmvoice_admin_session')
    setSessionToken('')
  }

  async function sendNotification(event) {
    event.preventDefault()
    setSending(true)
    setResult(null)
    try {
      const ids = profileIds
        .split(/[,\n]/)
        .map((id) => id.trim())
        .filter(Boolean)
      const response = await fetch(`${API_BASE}/api/admin/notifications/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify({
          title,
          body,
          type,
          ...(ids.length ? { profileIds: ids } : {}),
        }),
      })
      const payload = await response.json()
      if (response.status === 401) {
        logout()
        throw new Error('Your admin session expired. Please sign in again.')
      }
      if (!response.ok) throw new Error(payload.error?.message || 'Send failed')
      setResult({ ok: true, message: `Created ${payload.created} notification(s); sent to ${payload.sent} device(s).` })
      setTitle('')
      setBody('')
    } catch (error) {
      setResult({ ok: false, message: error.message })
    } finally {
      setSending(false)
    }
  }

  return (
    <main className="admin-page">
      <div className="admin-shell">
        <p className="admin-kicker">FarmVoice operations</p>
        {!sessionToken ? (
          <>
            <h1>Admin sign in</h1>
            <p className="admin-lede">Sign in to send messages to FarmVoice farmers.</p>
            <form className="admin-form" onSubmit={login}>
              <label>
                Username
                <input value={username} onChange={(event) => setUsername(event.target.value)} autoComplete="username" required />
              </label>
              <label>
                Password
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} autoComplete="current-password" required />
              </label>
              <button className="admin-submit" type="submit" disabled={loggingIn}>
                {loggingIn ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="admin-heading-row">
              <div>
                <h1>Send a farmer notification</h1>
                <p className="admin-lede">Broadcast an alert to every registered device, or target specific farmer profile IDs.</p>
              </div>
              <button className="admin-logout" type="button" onClick={logout}>Sign out</button>
            </div>
            <form className="admin-form" onSubmit={sendNotification}>
          <label>
            Notification type
            <select value={type} onChange={(event) => setType(event.target.value)}>
              <option value="general">General</option>
              <option value="weather">Weather</option>
              <option value="price">Market price</option>
              <option value="farming">Farming update</option>
              <option value="daily">Daily briefing</option>
            </select>
          </label>
          <label>
            Title
            <input value={title} onChange={(event) => setTitle(event.target.value)} maxLength={120} required />
          </label>
          <label>
            Message
            <textarea value={body} onChange={(event) => setBody(event.target.value)} maxLength={1000} rows={5} required />
          </label>
          <label>
            Target profile IDs <span>(optional, comma or newline separated)</span>
            <textarea value={profileIds} onChange={(event) => setProfileIds(event.target.value)} rows={3} />
          </label>
          <button className="admin-submit" type="submit" disabled={sending}>
            {sending ? 'Sending...' : 'Send notification'}
          </button>
            </form>
          </>
        )}
        {result && <p className={result.ok ? 'admin-result success' : 'admin-result error'}>{result.message}</p>}
      </div>
    </main>
  )
}

export default AdminNotifications
