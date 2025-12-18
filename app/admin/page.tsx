"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

export default function AdminPage() {
  const [password, setPassword] = useState('')
  const [authorized, setAuthorized] = useState(false)
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [category, setCategory] = useState('Web Development')
  const [content, setContent] = useState('')
  const [showPreview, setShowPreview] = useState(false)
  const [saving, setSaving] = useState(false)
  const router = useRouter()

  const check = (e: React.FormEvent) => {
    e.preventDefault()
    const secret = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'changeme'
    if (password === secret) setAuthorized(true)
    else alert('Invalid password')
  }

  const save = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!title || !slug || !excerpt || !content) {
      alert('Please fill all fields')
      return
    }
    setSaving(true)
    const payload = { title, slug, excerpt, category, content, password }
    const res = await fetch('/api/admin/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    setSaving(false)
    if (res.ok) {
      alert('Post saved successfully!')
      setTitle('')
      setSlug('')
      setExcerpt('')
      setCategory('Web Development')
      setContent('')
      router.refresh()
    } else {
      const err = await res.json()
      alert(`Save failed: ${err.error}`)
    }
  }

  if (!authorized) {
    return (
      <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
        <form onSubmit={check} className="p-8 bg-gray-800 rounded-lg w-full max-w-md shadow-xl border border-gray-700">
          <h2 className="text-3xl font-bold mb-2">Admin Access</h2>
          <p className="text-gray-400 mb-6 text-sm">Enter your admin password to access the blog editor.</p>
          <input 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Password" 
            type="password"
            className="w-full p-3 mb-4 bg-gray-700 border border-gray-600 rounded focus:border-blue-500 outline-none" 
          />
          <button type="submit" className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded font-semibold transition">
            Enter Admin Panel
          </button>
        </form>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Blog Editor</h1>
          <p className="text-gray-400">Create and publish new blog posts</p>
        </div>

        <form onSubmit={save} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Editor Panel */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Post Title</label>
              <input 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="e.g., The Future of Web Development" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:border-blue-500 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-2">URL Slug</label>
                <input 
                  value={slug} 
                  onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-'))} 
                  placeholder="future-of-web-development" 
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Category</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:border-blue-500 outline-none"
                >
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Blockchain</option>
                  <option>Marketing</option>
                  <option>Design</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Excerpt</label>
              <input 
                value={excerpt} 
                onChange={(e) => setExcerpt(e.target.value)} 
                placeholder="Brief summary of the post (used in listings)" 
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold">Content (Markdown)</label>
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-xs bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded flex items-center gap-1"
                >
                  {showPreview ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </button>
              </div>
              <textarea 
                value={content} 
                onChange={(e) => setContent(e.target.value)} 
                rows={16} 
                placeholder="# Heading&#10;&#10;Write your post in markdown format...&#10;&#10;## Subheading&#10;- Bullet points&#10;- More points" 
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded font-mono text-sm focus:border-blue-500 outline-none resize-none"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-gray-800 border border-gray-700 rounded p-6">
              <h3 className="font-semibold mb-4">Actions</h3>
              <button 
                type="submit" 
                disabled={saving}
                className="w-full p-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded font-semibold transition mb-2"
              >
                {saving ? 'Saving...' : 'Save & Publish'}
              </button>
              <button 
                type="button" 
                onClick={() => { setTitle(''); setSlug(''); setExcerpt(''); setCategory('Web Development'); setContent('') }} 
                className="w-full p-3 bg-gray-700 hover:bg-gray-600 rounded font-semibold transition"
              >
                Clear Form
              </button>
            </div>

            {showPreview && (
              <div className="bg-gray-800 border border-gray-700 rounded p-6">
                <h3 className="font-semibold mb-4">Preview</h3>
                <div className="text-sm space-y-3">
                  <div>
                    <p className="text-gray-500 text-xs">Title</p>
                    <p className="font-semibold">{title || '(No title)'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Slug</p>
                    <p className="font-mono text-xs">{slug || '(No slug)'}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Category</p>
                    <p>{category}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">Excerpt</p>
                    <p className="text-xs line-clamp-2">{excerpt || '(No excerpt)'}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-blue-900/20 border border-blue-700/30 rounded p-4 text-sm">
              <p className="font-semibold mb-2">💡 Markdown Tips</p>
              <ul className="text-xs space-y-1 text-gray-300">
                <li># Heading 1, ## Heading 2, etc</li>
                <li>**bold** and *italic*</li>
                <li>- Bullet points</li>
                <li>[Link](https://url)</li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}
