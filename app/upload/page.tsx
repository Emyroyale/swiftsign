'use client'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

// Dynamically import everything PDF-related
const PDFEditor = dynamic(() => import('./PDFEditor'), { ssr: false })

export default function UploadPage() {
  const { user, isLoaded } = useUser()
  const [uploading, setUploading] = useState(false)
  const [pdfUrl, setPdfUrl] = useState<string | null>(null)
  const [fileName, setFileName] = useState<string>('')

  useEffect(() => {
    if (isLoaded && !user) {
      redirect('/')
    }
  }, [user, isLoaded])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.type !== 'application/pdf') {
      alert('Please upload a PDF file')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB')
      return
    }

    setUploading(true)
    setFileName(file.name)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${user?.id}-${Date.now()}.${fileExt}`
      const filePath = `pdfs/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, file)

      if (uploadError) throw uploadError

      const { data } = supabase.storage
        .from('documents')
        .getPublicUrl(filePath)

      setPdfUrl(data.publicUrl)
      alert('PDF uploaded successfully!')
    } catch (error) {
      console.error('Error uploading PDF:', error)
      alert('Error uploading PDF. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  if (!isLoaded || !user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">SwiftSign</div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-white/80 hover:text-white">Home</a>
            <a href="/dashboard" className="text-white/80 hover:text-white">Dashboard</a>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {user.firstName?.[0] || user.emailAddresses[0].emailAddress[0].toUpperCase()}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Upload PDF</h1>
        <p className="text-xl text-white/70 mb-8">Upload a PDF to add signature fields</p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
          <label className="block">
            <div className="border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-blue-400 transition-colors cursor-pointer">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {uploading ? 'Uploading...' : 'Click to upload PDF'}
              </h3>
              <p className="text-white/60 text-sm mb-4">or drag and drop</p>
              <p className="text-white/40 text-xs">PDF files only, max 10MB</p>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                disabled={uploading}
                className="hidden"
              />
            </div>
          </label>
        </div>

        {pdfUrl && <PDFEditor pdfUrl={pdfUrl} fileName={fileName} />}
      </div>

      <Footer />
    </div>
  )
}