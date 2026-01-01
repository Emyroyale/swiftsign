'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Footer from '@/components/Footer'

interface SignatureField {
  id: string
  x: number
  y: number
  page: number
  signed?: boolean
}

interface Document {
  id: string
  file_name: string
  file_url: string
  signature_fields: SignatureField[]
}

export default function SignPage() {
  const params = useParams()
  const documentId = params.id as string
  
  const [document, setDocument] = useState<Document | null>(null)
  const [loading, setLoading] = useState(true)
  const [signatureFields, setSignatureFields] = useState<SignatureField[]>([])
  const [currentSignature, setCurrentSignature] = useState('')

  useEffect(() => {
    loadDocument()
  }, [documentId])

  const loadDocument = async () => {
    try {
      const { data, error } = await supabase
        .from('documents')
        .select('*')
        .eq('id', documentId)
        .single()

      if (error) throw error

      setDocument(data)
      setSignatureFields(data.signature_fields)
    } catch (error) {
      console.error('Error loading document:', error)
      alert('Document not found')
    } finally {
      setLoading(false)
    }
  }

  const handleSignField = (fieldId: string) => {
    const signature = prompt('Enter your full name to sign:')
    if (signature) {
      setSignatureFields(fields =>
        fields.map(field =>
          field.id === fieldId ? { ...field, signed: true } : field
        )
      )
      setCurrentSignature(signature)
    }
  }

  const handleSubmit = async () => {
    const allSigned = signatureFields.every(field => field.signed)
    
    if (!allSigned) {
      alert('Please sign all fields before submitting')
      return
    }

    alert('Document signed successfully! ✅')
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white">Loading document...</p>
      </div>
    )
  }

  if (!document) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white">Document not found</p>
      </div>
    )
  }

  const allSigned = signatureFields.every(field => field.signed)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="text-2xl font-bold text-white">SwiftSign</div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Sign Document</h1>
        <p className="text-xl text-white/70 mb-8">{document.file_name}</p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Review & Sign</h3>
              <p className="text-white/60 text-sm mt-1">
                Click on each signature field to sign
              </p>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!allSigned}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {allSigned ? 'Submit Signed Document ✓' : `Sign All Fields (${signatureFields.filter(f => f.signed).length}/${signatureFields.length})`}
            </button>
          </div>

          <div className="bg-slate-100 rounded-lg overflow-hidden relative" style={{ height: '600px' }}>
            <div className="relative w-full h-full">
              <iframe
                src={document.file_url}
                className="w-full h-full"
                title={document.file_name}
              />

              {signatureFields.map(field => (
                <div
                  key={field.id}
                  onClick={() => !field.signed && handleSignField(field.id)}
                  className={`absolute border-2 rounded ${
                    field.signed
                      ? 'border-green-500 bg-green-500/20 cursor-default'
                      : 'border-blue-500 bg-blue-500/20 cursor-pointer hover:bg-blue-500/30'
                  }`}
                  style={{
                    left: `${field.x}px`,
                    top: `${field.y}px`,
                    width: '200px',
                    height: '60px',
                  }}
                >
                  <div className="flex items-center justify-center h-full p-2">
                    {field.signed ? (
                      <span className="text-green-900 font-semibold text-sm">✓ Signed</span>
                    ) : (
                      <span className="text-blue-900 font-semibold text-xs">Click to Sign</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}