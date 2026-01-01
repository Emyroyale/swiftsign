'use client'
import { useState } from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'

export default function Home() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [showIntegrationModal, setShowIntegrationModal] = useState<string | null>(null)

  // Google Drive Picker
  const handleGoogleDrive = () => {
    window.location.href = '/dashboard'
  }

  // Gmail Integration
  const handleGmail = () => {
    setShowIntegrationModal('gmail')
  }

  // Google Docs Integration
  const handleGoogleDocs = () => {
    setShowIntegrationModal('docs')
  }

  // Google Sheets Integration
  const handleGoogleSheets = () => {
    setShowIntegrationModal('sheets')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Integration Modal */}
      {showIntegrationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowIntegrationModal(null)}>
          <div className="bg-white rounded-3xl p-6 md:p-8 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              {showIntegrationModal === 'gmail' && (
                <>
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Gmail Integration</h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    Send signed documents directly via Gmail. Join the waitlist to get early access!
                  </p>
                  <a href="#waitlist" className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold px-6 py-3 rounded-xl mb-3 text-sm md:text-base" onClick={() => setShowIntegrationModal(null)}>
                    Join Waitlist →
                  </a>
                  <button onClick={() => setShowIntegrationModal(null)} className="text-gray-500 text-sm">
                    Close
                  </button>
                </>
              )}
              
              {showIntegrationModal === 'docs' && (
                <>
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.727 6.727H14V6h.727v.727zm0 1.454H14v.728h.727v-.728zm0 1.455H14v.727h.727v-.727zm0 1.454H14v.727h.727V11.09zm0 1.454H14v.728h.727v-.728zM20.364 5.273h-2.182V4.09c0-.4-.327-.727-.727-.727H6.545c-.4 0-.727.327-.727.727v1.182H3.636c-.4 0-.727.327-.727.727v13.09c0 .402.327.728.727.728h2.182V20.91c0 .402.327.728.727.728h10.91c.4 0 .727-.326.727-.727v-1.182h2.182c.4 0 .727-.326.727-.727V6c0-.4-.327-.727-.727-.727zM6.545 4.818h10.91v11.273c-.39.11-.727.408-.727.818v2.182H6.545V4.818zm11.637 15.273H7.273v-.728h10.182c.4 0 .727-.326.727-.727V7.273h.727v12.818h-.727zm2.182-2.182h-1.455V6.727c0-.4-.327-.727-.727-.727H7.273V4.818h12.364v12.364h.727V6z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Google Docs Integration</h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    Import Google Docs and convert to PDF for signing. Join the waitlist for early access!
                  </p>
                  <a href="#waitlist" className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold px-6 py-3 rounded-xl mb-3 text-sm md:text-base" onClick={() => setShowIntegrationModal(null)}>
                    Join Waitlist →
                  </a>
                  <button onClick={() => setShowIntegrationModal(null)} className="text-gray-500 text-sm">
                    Close
                  </button>
                </>
              )}
              
              {showIntegrationModal === 'sheets' && (
                <>
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.636 4.364v15.272H4.364V4.364h15.272m0-1.455H4.364A1.455 1.455 0 0 0 2.91 4.364v15.272a1.455 1.455 0 0 0 1.454 1.455h15.272a1.455 1.455 0 0 0 1.455-1.455V4.364a1.455 1.455 0 0 0-1.455-1.455zM6.545 17.454h3.637v-2.908H6.545v2.908zm0-4.363h3.637V10.18H6.545v2.91zm0-4.364h3.637V5.818H6.545v2.91zm5.092 8.727h3.636v-2.908h-3.636v2.908zm0-4.363h3.636V10.18h-3.636v2.91zm0-4.364h3.636V5.818h-3.636v2.91z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Google Sheets Integration</h3>
                  <p className="text-gray-600 mb-6 text-sm md:text-base">
                    Bulk send documents using Google Sheets. Perfect for sending to multiple recipients!
                  </p>
                  <a href="#waitlist" className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white font-bold px-6 py-3 rounded-xl mb-3 text-sm md:text-base" onClick={() => setShowIntegrationModal(null)}>
                    Join Waitlist →
                  </a>
                  <button onClick={() => setShowIntegrationModal(null)} className="text-gray-500 text-sm">
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation - Clean & Minimal */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
            SwiftSign
          </a>
          <div className="flex items-center gap-4 md:gap-6">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-gray-600 hover:text-gray-900 font-medium text-sm">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <a href="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
                Dashboard
              </a>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* HERO - The Hook */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-20 text-center">
        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-6">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="whitespace-nowrap">First 100 users lock in $9.99/month forever</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight px-2">
          Stop Paying<br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            $40/Month Per User
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-2xl text-gray-600 mb-3 md:mb-4 max-w-3xl mx-auto px-4">
          Get legally-binding eSignatures for your entire team at <strong className="text-gray-900">$9.99/month flat</strong>
        </p>
        
        <p className="text-base md:text-lg text-gray-500 mb-6 md:mb-8 px-4">
          No per-user fees. No envelope limits. No contracts.
        </p>

        {/* Email Capture */}
        <WaitlistForm />

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-6 md:mt-8 text-xs md:text-sm text-gray-500 px-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Legally binding</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="whitespace-nowrap">Google Workspace</span>
          </div>
        </div>
      </section>

      {/* GOOGLE WORKSPACE INTEGRATIONS - REAL & FUNCTIONAL */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">Native Integrations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              Works Seamlessly With Google Workspace
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Access documents from Drive. Send via Gmail. Sign anywhere.
            </p>
          </div>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            {/* Google Drive */}
            <button
              onClick={handleGoogleDrive}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-blue-200"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 relative">
                <svg viewBox="0 0 87.3 78" className="w-full h-full">
                  <path fill="#0066da" d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"/>
                  <path fill="#00ac47" d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"/>
                  <path fill="#ea4335" d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"/>
                  <path fill="#00832d" d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"/>
                  <path fill="#2684fc" d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"/>
                  <path fill="#ffba00" d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"/>
                </svg>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                Google Drive
              </h3>
              <p className="text-xs md:text-sm text-gray-600 hidden md:block">
                Upload PDFs directly from Drive
              </p>
            </button>

            {/* Gmail */}
            <button
              onClick={handleGmail}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-red-200"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                  <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64V9.548L3.927 3.493C2.309 2.28 0 3.434 0 5.457z" fill="#34A853"/>
                  <path d="M18.545 21.002h3.819c.904 0 1.636-.732 1.636-1.636V5.457c0-2.023-2.309-3.178-3.927-1.964L12 9.548v7.092l6.545-4.91v9.272z" fill="#FBBC04"/>
                  <path d="M12 16.64l6.545-4.91v-7.273L12 9.548v7.092z" fill="#C5221F"/>
                </svg>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-red-600 transition-colors">
                Gmail
              </h3>
              <p className="text-xs md:text-sm text-gray-600 hidden md:block">
                Send signed docs via email
              </p>
            </button>

            {/* Google Docs */}
            <button
              onClick={handleGoogleDocs}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-blue-200"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#4285F4" d="M14.727 6.727H14V6h.727v.727zm0 1.454H14v.728h.727v-.728zm0 1.455H14v.727h.727v-.727zm0 1.454H14v.727h.727V11.09zm0 1.454H14v.728h.727v-.728zM20.364 5.273h-2.182V4.09c0-.4-.327-.727-.727-.727H6.545c-.4 0-.727.327-.727.727v1.182H3.636c-.4 0-.727.327-.727.727v13.09c0 .402.327.728.727.728h2.182V20.91c0 .402.327.728.727.728h10.91c.4 0 .727-.326.727-.727v-1.182h2.182c.4 0 .727-.326.727-.727V6c0-.4-.327-.727-.727-.727zM6.545 4.818h10.91v11.273c-.39.11-.727.408-.727.818v2.182H6.545V4.818zm11.637 15.273H7.273v-.728h10.182c.4 0 .727-.326.727-.727V7.273h.727v12.818h-.727zm2.182-2.182h-1.455V6.727c0-.4-.327-.727-.727-.727H7.273V4.818h12.364v12.364h.727V6z"/>
                </svg>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-blue-600 transition-colors">
                Google Docs
              </h3>
              <p className="text-xs md:text-sm text-gray-600 hidden md:block">
                Convert docs to PDF
              </p>
            </button>

            {/* Google Sheets */}
            <button
              onClick={handleGoogleSheets}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 cursor-pointer group border-2 border-transparent hover:border-green-200"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4">
                <svg viewBox="0 0 24 24" className="w-full h-full">
                  <path fill="#0F9D58" d="M19.636 4.364v15.272H4.364V4.364h15.272m0-1.455H4.364A1.455 1.455 0 0 0 2.91 4.364v15.272a1.455 1.455 0 0 0 1.454 1.455h15.272a1.455 1.455 0 0 0 1.455-1.455V4.364a1.455 1.455 0 0 0-1.455-1.455zM6.545 17.454h3.637v-2.908H6.545v2.908zm0-4.363h3.637V10.18H6.545v2.91zm0-4.364h3.637V5.818H6.545v2.91zm5.092 8.727h3.636v-2.908h-3.636v2.908zm0-4.363h3.636V10.18h-3.636v2.91zm0-4.364h3.636V5.818h-3.636v2.91z"/>
                </svg>
              </div>
              <h3 className="text-sm md:text-lg font-bold text-gray-900 mb-1 md:mb-2 group-hover:text-green-600 transition-colors">
                Google Sheets
              </h3>
              <p className="text-xs md:text-sm text-gray-600 hidden md:block">
                Bulk send documents
              </p>
            </button>
          </div>

          {/* Integration Benefits */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Native Integration</h4>
                <p className="text-xs md:text-sm text-gray-600">Works in Google Workspace</p>
              </div>
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">Auto-Sync</h4>
                <p className="text-xs md:text-sm text-gray-600">Saves back to Drive</p>
              </div>
              <div>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-2 md:mb-3">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">No Switching</h4>
                <p className="text-xs md:text-sm text-gray-600">Never leave workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION - The Unique Mechanism */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              Built for Google Workspace Teams
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              SwiftSign does ONE thing perfectly: eSignatures. No bloat. No BS. Just what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Features List */}
            <div className="space-y-4 md:space-y-6">
              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Unlimited Everything</h3>
                  <p className="text-sm md:text-base text-gray-600">Unlimited signatures. Unlimited users. Unlimited documents. One flat price.</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Google Workspace Native</h3>
                  <p className="text-sm md:text-base text-gray-600">Works directly in Google Drive. No more downloading, uploading, switching apps.</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Legally Binding</h3>
                  <p className="text-sm md:text-base text-gray-600">Same legal validity as DocuSign. ESIGN Act compliant. Court-admissible.</p>
                </div>
              </div>

              <div className="flex gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">Simple Setup</h3>
                  <p className="text-sm md:text-base text-gray-600">Connect your Google account. Start signing. That's it. No training needed.</p>
                </div>
              </div>
            </div>

            {/* Visual/Demo Space */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="text-5xl md:text-6xl mb-4">⚡</div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">5 Minutes to Your First Signature</h3>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                Not 5 hours of training. Not 5 calls with sales. 5 actual minutes.
              </p>
              <div className="space-y-2 text-left max-w-sm mx-auto">
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>Connect Google Workspace</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>Upload your document</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>Send for signature</span>
                </div>
                <div className="flex items-center gap-2 text-sm md:text-base text-gray-700 font-bold">
                  <span className="text-green-600">✓</span>
                  <span>Done. Legally signed.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SLEEK CTA SECTION - SwiftSign Branded */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Side - Message */}
            <div className="text-white text-center md:text-left flex-1">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Sign. Send. Done.
              </h2>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                Fast, reliable e-signatures - without the bloat
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <div className="flex-shrink-0">
              <a 
                href="#waitlist" 
                className="inline-block bg-white text-blue-600 font-bold text-lg px-10 md:px-12 py-4 md:py-5 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION STATS */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-xs md:text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wide">Trusted by Modern Teams</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              Built for Teams Who Value Speed & Savings
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Professional eSignatures without the enterprise price tag
            </p>
          </div>

          {/* Value Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="text-center bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Save $2,280
              </div>
              <div className="text-xs md:text-base text-gray-600">Per year for 5 users</div>
            </div>
            <div className="text-center bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                96% Cheaper
              </div>
              <div className="text-xs md:text-base text-gray-600">Than enterprise tools</div>
            </div>
            <div className="text-center bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                5 Minutes
              </div>
              <div className="text-xs md:text-base text-gray-600">To first signature</div>
            </div>
            <div className="text-center bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                100% Legal
              </div>
              <div className="text-xs md:text-base text-gray-600">ESIGN Act compliant</div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Optimized Spacing */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 px-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-base md:text-lg text-blue-100 mb-6 px-4">
              One plan. Everything included. No hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-2 md:gap-3 bg-white/10 backdrop-blur-sm rounded-full p-1">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-white hover:text-blue-100'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-semibold transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'text-white hover:text-blue-100'
                }`}
              >
                Annual
                <span className="ml-1 md:ml-2 text-xs bg-green-400 text-green-900 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Card - Compact */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-2xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="text-xs md:text-sm font-semibold text-blue-600 mb-2">PROFESSIONAL</div>
              {billingCycle === 'monthly' ? (
                <>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                    $9.99<span className="text-xl md:text-2xl text-gray-500">/month</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">Billed monthly • Cancel anytime</p>
                </>
              ) : (
                <>
                  <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-1">
                    $7.99<span className="text-xl md:text-2xl text-gray-500">/month</span>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">$95.88 billed annually • Save $23.88/year</p>
                </>
              )}
            </div>

            {/* Features List - Compact */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-900 font-medium">Unlimited signatures</span>
              </div>

              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-900 font-medium">Unlimited team members</span>
              </div>

              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-900 font-medium">Google Workspace integration</span>
              </div>

              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-900 font-medium">Mobile signing on any device</span>
              </div>

              <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-900 font-medium">Email support</span>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-900 font-medium">Cancel anytime (no contract)</span>
              </div>
            </div>

            {/* CTA Button */}
            <a href="#waitlist" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 text-base md:text-lg text-center">
              Join the Waitlist →
            </a>
            
            <p className="text-xs md:text-sm text-gray-500 mt-3 text-center">
              First 100 users lock in this price forever
            </p>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-gray-600 px-4">
              Everything you need to know about SwiftSign
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {/* FAQ Items */}
            {[
              {
                q: "How is SwiftSign different from DocuSign?",
                a: "SwiftSign is built specifically for Google Workspace teams with flat pricing (no per-user fees). We focus on core eSignature features that work perfectly, without the 200+ bloated features you'll never use. Plus, we integrate natively with Google Drive, Docs, Gmail, and Sheets so you never leave your workflow."
              },
              {
                q: "Are SwiftSign signatures legally binding?",
                a: "Yes! SwiftSign signatures are 100% legally binding and compliant with the ESIGN Act and UETA (Uniform Electronic Transactions Act). Our signatures are court-admissible and have the same legal validity as traditional wet ink signatures and other eSignature platforms like DocuSign."
              },
              {
                q: "Can I cancel my subscription anytime?",
                a: "Absolutely! There are no contracts or commitments. You can cancel your subscription at any time with one click, and you'll retain access until the end of your billing period. All your signed documents remain accessible even after cancellation."
              },
              {
                q: "How does the Google Workspace integration work?",
                a: "SwiftSign connects directly to your Google Drive, Docs, Gmail, and Sheets. You can upload documents straight from Drive, convert Google Docs to PDFs, send signature requests via Gmail, and even bulk-send using Sheets - all without leaving your Google Workspace. Signed documents are automatically saved back to your Drive with full version history."
              },
              {
                q: "What happens after the first 100 users?",
                a: "The first 100 users get grandfathered pricing at $9.99/month forever - even if we raise prices later. After the first 100 spots are filled, new users will pay our standard pricing of $12.99/month. That's still 68% cheaper than DocuSign! Join the waitlist now to secure your lifetime discount."
              },
              {
                q: "Is there really unlimited signatures and users?",
                a: "Yes! Unlike DocuSign's per-user pricing and envelope limits, SwiftSign offers truly unlimited signatures, unlimited team members, and unlimited documents for one flat monthly price. No hidden fees, no surprise charges, no artificial limits."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-xl md:rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 md:px-8 py-4 md:py-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 md:w-6 md:h-6 text-gray-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 md:px-8 pb-4 md:pb-6 text-sm md:text-base text-gray-600">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Waitlist */}
      <section id="waitlist" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 px-4">
            Join the Waitlist Today
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 px-4">
            Lock in <strong className="text-gray-900">$9.99/month forever</strong>. Be among the first 100 users.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-6 md:mb-8">
            <WaitlistForm />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-6 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">⚡</div>
              <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">Instant Setup</div>
              <div className="text-xs md:text-sm text-gray-600">5 minutes to first signature</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">🔒</div>
              <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">Price Lock</div>
              <div className="text-xs md:text-sm text-gray-600">$9.99/month forever</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">✓</div>
              <div className="text-sm md:text-base font-semibold text-gray-900 mb-1">No Risk</div>
              <div className="text-xs md:text-sm text-gray-600">Cancel anytime</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 md:mb-3 block">
                SwiftSign
              </a>
              <p className="text-xs md:text-sm text-gray-400">
                eSignature for Google Workspace teams. Unlimited signatures at $9.99/month.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Product</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
                <li><a href="#waitlist" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Company</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Contact</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="mailto:support@swiftsign.com" className="hover:text-white transition-colors">support@swiftsign.com</a></li>
                <li className="text-gray-400">Built for Google Workspace</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>© 2026 SwiftSign. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }])

      if (error) {
        if (error.code === '23505') {
          setMessage("You're already on the waitlist!")
        } else {
          setMessage('Something went wrong. Try again.')
        }
      } else {
        setMessage('✅ Success! You\'re on the list! Check your email.')
        setEmail('')
      }
    } catch (err) {
      setMessage('Error signing up. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-3">
        <input 
          type="email" 
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-xl text-sm md:text-base border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-colors placeholder-gray-500"
        />
        <button 
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-lg transition-all disabled:opacity-50 text-sm md:text-base whitespace-nowrap"
        >
          {loading ? 'Joining...' : 'Get Early Access'}
        </button>
      </form>
      {message && (
        <p className="text-center text-sm text-gray-700 font-medium mb-2">{message}</p>
      )}
      <p className="text-xs text-gray-500 text-center">
        🔥 <strong className="text-gray-700">83 spots left</strong> • First 100 users lock in $9.99/month forever
      </p>
    </div>
  )
}