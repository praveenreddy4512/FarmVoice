import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'https://farmer-app-backend-flax.vercel.app'

function AdminNotifications() {
  const [adminKey, setAdminKey] = useState('')
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [type, setType] = useState('general')
  const [profileIds, setProfileIds] = useState('')
  const [result, setResult] = useState(null)
  const [sending, setSending] = useState(false)

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
          'x-admin-key': adminKey,
        },
        body: JSON.stringify({
          title,
          body,
          type,
          ...(ids.length ? { profileIds: ids } : {}),
        }),
      })
      const payload = await response.json()
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
        <h1>Send a farmer notification</h1>
        <p className="admin-lede">Broadcast an alert to every registered device, or target specific farmer profile IDs.</p>
        <form className="admin-form" onSubmit={sendNotification}>
          <label>
            Admin key
            <input type="password" value={adminKey} onChange={(event) => setAdminKey(event.target.value)} required />
          </label>
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
        {result && <p className={result.ok ? 'admin-result success' : 'admin-result error'}>{result.message}</p>}
      </div>
    </main>
  )
}

export default AdminNotifications
