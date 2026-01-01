'use client'
import { useUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'
import Footer from '@/components/Footer'

export default function Dashboard() {
  const { user, isLoaded } = useUser()

  useEffect(() => {
    if (isLoaded && !user) {
      redirect('/')
    }
  }, [user, isLoaded])

  if (!isLoaded || !user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">SwiftSign</div>
          <div className="flex items-center gap-4">
            <a href="/" className="text-white/80 hover:text-white">Home</a>
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold">
              {user.firstName?.[0] || user.emailAddresses[0].emailAddress[0].toUpperCase()}
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome, {user.firstName || 'there'}! 👋
        </h1>
        <p className="text-xl text-white/70 mb-12">
          You're signed in as {user.primaryEmailAddress?.emailAddress}
        </p>

        {/* Single Status Card - Centered */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
            <div className="text-white/60 text-sm mb-3">Your Status</div>
            <div className="text-4xl font-bold text-green-400 mb-3">
              ✅ You're In!
            </div>
            <div className="text-white/80 mb-4">Part of the first 100 early access users</div>
            <div className="text-sm text-white/60 mb-6">Launch: April 2026 • We'll email you!</div>
            
            {/* Upload PDF Button */}
            <a 
              href="/upload"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-xl transition-all transform hover:scale-105"
            >
              Upload PDF
            </a>
          </div>
        </div>

        {/* Locked-In Pricing Notice */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 mb-12">
          <div className="flex items-start gap-3">
            <div className="text-3xl">🎉</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                You're Locked In at $9/Month Forever
              </h3>
              <p className="text-white/70">
                As one of the first 100 users, you get founder pricing: $9/month for unlimited signatures, 
                unlimited team members, and all features. This price will never increase for you. Ever.
              </p>
            </div>
          </div>
        </div>

        {/* Coming Soon Features - Light Background */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What You're Getting</h2>
          <div className="space-y-6">
            {/* PDF Upload - Adobe PDF File Icon */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-md bg-white">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" 
                  alt="PDF"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">PDF Upload & Signing</div>
                <div className="text-slate-600 text-sm">Upload any PDF and add signature fields in seconds</div>
              </div>
            </div>
            
            {/* Google Drive */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-white shadow-md p-2">
                <svg className="w-full h-full" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg">
                  <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
                  <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/>
                  <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/>
                  <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
                  <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
                  <path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">Google Drive Integration</div>
                <div className="text-slate-600 text-sm">Right-click any PDF in Drive and send for signature</div>
              </div>
            </div>
            
            {/* Fast Signing - Signature Icon */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-500 shadow-md">
                <svg className="w-10 h-10" fill="none" stroke="#FFFFFF" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"/>
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">Fast Signing Experience</div>
                <div className="text-slate-600 text-sm">Recipients sign in under 30 seconds</div>
              </div>
            </div>
            
            {/* Unlimited Team */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-500 shadow-md">
                <svg className="w-10 h-10" fill="none" stroke="#FFFFFF" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">Unlimited Team Members</div>
                <div className="text-slate-600 text-sm">Add your whole team at no extra cost</div>
              </div>
            </div>
            
            {/* Unlimited Signatures */}
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-indigo-500 shadow-md">
                <svg className="w-10 h-10" fill="none" stroke="#FFFFFF" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div>
                <div className="text-slate-900 font-bold text-lg">Unlimited Signatures</div>
                <div className="text-slate-600 text-sm">No envelope limits, no caps, no surprises</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}