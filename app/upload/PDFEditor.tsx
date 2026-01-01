'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface SignatureField {
  id: string
  x: number
  y: number
  page: number
  offsetX?: number
  offsetY?: number
}

export default function PDFEditor({ pdfUrl, fileName }: { pdfUrl: string; fileName: string }) {
  const [signatureFields, setSignatureFields] = useState<SignatureField[]>([])
  const [saving, setSaving] = useState(false)
  const [documentId, setDocumentId] = useState<string | null>(null)
  const [recipientEmail, setRecipientEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [addingMode, setAddingMode] = useState(false)
  const [draggingId, setDraggingId] = useState<string | null>(null)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })

  const handleSave = async () => {
    setSaving(true)
    try {
      const { data, error } = await supabase
        .from('documents')
        .insert({
          user_id: 'temp-user',
          file_name: fileName,
          file_url: pdfUrl,
          signature_fields: signatureFields.map(({ offsetX, offsetY, ...field }) => field),
        })
        .select()
        .single()

      if (error) throw error

      setDocumentId(data.id)
      alert('Document saved successfully! Now enter recipient email to send for signing.')
    } catch (error) {
      console.error('Error saving document:', error)
      alert('Error saving document. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!addingMode) return
    if ((e.target as HTMLElement).closest('.signature-box')) return
    if ((e.target as HTMLElement).tagName === 'IFRAME') return
    
    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top + container.scrollTop

    const newField: SignatureField = {
      id: `sig-${Date.now()}`,
      x,
      y,
      page: 1,
    }

    setSignatureFields([...signatureFields, newField])
    setAddingMode(false)
  }

  const handleMouseDown = (e: React.MouseEvent, fieldId: string) => {
    e.stopPropagation()
    e.preventDefault()
    
    const box = e.currentTarget as HTMLElement
    const rect = box.getBoundingClientRect()
    
    // Calculate offset from mouse to box top-left
    const offsetX = e.clientX - rect.left
    const offsetY = e.clientY - rect.top
    
    setDragOffset({ x: offsetX, y: offsetY })
    setDraggingId(fieldId)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!draggingId) return
    e.preventDefault()

    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    
    // Calculate new position accounting for drag offset
    const x = Math.max(0, Math.min(e.clientX - rect.left - dragOffset.x, rect.width - 200))
    const y = Math.max(0, e.clientY - rect.top + container.scrollTop - dragOffset.y)

    setSignatureFields(fields =>
      fields.map(field =>
        field.id === draggingId ? { ...field, x, y } : field
      )
    )
  }

  const handleMouseUp = () => {
    setDraggingId(null)
    setDragOffset({ x: 0, y: 0 })
  }

  const removeField = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    setSignatureFields(signatureFields.filter(field => field.id !== id))
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl font-semibold text-white">Edit: {fileName}</h3>
          <p className="text-white/60 text-sm mt-1">
            {addingMode ? '👆 Click anywhere on the document to place signature field' : 'Scroll to view document • Drag boxes to reposition'}
          </p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setAddingMode(!addingMode)}
            className={`${
              addingMode 
                ? 'bg-blue-600 ring-2 ring-blue-400' 
                : 'bg-blue-500 hover:bg-blue-600'
            } text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all`}
          >
            {addingMode ? '✓ Click Document to Add' : '+ Add Signature Field'}
          </button>
          <button 
            onClick={() => setSignatureFields([])}
            disabled={signatureFields.length === 0}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm disabled:opacity-50"
          >
            Clear All ({signatureFields.length})
          </button>
          <button 
            onClick={handleSave}
            disabled={saving || signatureFields.length === 0}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? 'Saving...' : `Save Document (${signatureFields.length} fields)`}
          </button>
        </div>
      </div>

      {/* Scrollable PDF Container */}
      <div 
        className={`pdf-container bg-slate-100 rounded-lg overflow-y-auto overflow-x-hidden relative border-2 ${
          addingMode ? 'border-blue-500 ring-2 ring-blue-300' : 'border-slate-300'
        }`}
        style={{ height: '700px' }}
        onClick={handleContainerClick}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className={`relative w-full ${addingMode ? 'cursor-crosshair' : ''}`}>
          {/* PDF Display */}
          <iframe
            src={pdfUrl}
            className="w-full border-0"
            style={{ height: '1400px', pointerEvents: addingMode ? 'none' : 'auto' }}
            title={fileName}
          />

          {/* Signature fields overlay */}
          {signatureFields.map(field => (
            <div
              key={field.id}
              className={`signature-box absolute border-2 bg-blue-500/30 rounded ${
                draggingId === field.id 
                  ? 'border-blue-700 shadow-2xl cursor-grabbing z-50 ring-2 ring-blue-400' 
                  : 'border-blue-500 cursor-grab hover:border-blue-600 hover:shadow-xl hover:bg-blue-500/40'
              }`}
              style={{
                left: `${field.x}px`,
                top: `${field.y}px`,
                width: '200px',
                height: '60px',
              }}
              onMouseDown={(e) => handleMouseDown(e, field.id)}
            >
              <div className="flex items-center justify-between p-2 h-full pointer-events-none">
                <span className="text-blue-900 text-xs font-bold">✍️ Signature</span>
                <button
                  onClick={(e) => removeField(field.id, e)}
                  onMouseDown={(e) => e.stopPropagation()}
                  className="bg-red-500 hover:bg-red-600 text-white rounded px-2 py-1 text-xs pointer-events-auto font-bold"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-white/70 text-sm">
        {signatureFields.length} signature field{signatureFields.length !== 1 ? 's' : ''} added
        {draggingId && <span className="ml-4 text-blue-400 animate-pulse">• Dragging...</span>}
        {addingMode && <span className="ml-4 text-blue-400 animate-pulse">• Adding mode active - click document</span>}
      </div>

      {documentId && (
        <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
          <h4 className="text-white font-semibold text-lg mb-3">📧 Send for Signing</h4>
          <p className="text-white/70 text-sm mb-4">Enter the recipient's email to send them a signing link</p>
          
          <div className="flex gap-3 mb-4">
            <input
              type="email"
              placeholder="recipient@example.com"
              value={recipientEmail}
              onChange={(e) => setRecipientEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/50"
            />
            <button
              disabled={sending || !recipientEmail}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {sending ? 'Sending...' : 'Send Link'}
            </button>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-3">
            <p className="text-white/60 text-xs mb-1">Or copy this link:</p>
            <code className="text-blue-300 text-sm break-all">
              {typeof window !== 'undefined' ? window.location.origin : ''}/sign/{documentId}
            </code>
          </div>
        </div>
      )}
    </div>
  )
}