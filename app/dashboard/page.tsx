'use client'
import { useUser } from '@clerk/nextjs'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const { user } = useUser()
  const router = useRouter()

  const handleUploadClick = () => {
    router.push('/upload')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation - Matches Landing Page */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
            SwiftSign
          </Link>
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              Home
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Welcome, {user?.firstName || 'there'}! 👋
          </h1>
          <p className="text-lg text-gray-600">
            You're signed in as {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>

        {/* Status Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 text-center max-w-2xl mx-auto border border-gray-100">
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2 uppercase tracking-wide font-semibold">Your Status</p>
            <div className="flex items-center justify-center gap-2 mb-3">
              <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <h2 className="text-3xl font-bold text-green-600">You're In!</h2>
            </div>
            <p className="text-gray-700 mb-4">
              Part of the first 100 early access users
            </p>
            <p className="text-sm text-gray-500">
              Launch: April 2026 • We'll email you!
            </p>
          </div>

          <button
            onClick={handleUploadClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105 text-lg w-full sm:w-auto"
          >
            Upload PDF
          </button>
        </div>

        {/* Pricing Lock Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-xl">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎉</div>
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                You're Locked In at $9/Month Forever
              </h3>
              <p className="text-blue-100 text-sm md:text-base">
                As one of the first 100 users, you get founder pricing: $9/month for unlimited signatures, 
                unlimited team members, and all features. This price will never increase for you. Ever.
              </p>
            </div>
          </div>
        </div>

        {/* Google Workspace Integrations - Functional */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Google Workspace Integrations</h3>
          <p className="text-gray-600 mb-6">Connect your workflow directly to SwiftSign</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Google Drive */}
            <button
              onClick={() => window.location.href = '/upload?source=drive'}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group w-full text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <svg viewBox="0 0 87.3 78" className="w-full h-full">
                    <path fill="#0066da" d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"/>
                    <path fill="#00ac47" d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"/>
                    <path fill="#ea4335" d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"/>
                    <path fill="#00832d" d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"/>
                    <path fill="#2684fc" d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"/>
                    <path fill="#ffba00" d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">Google Drive</h4>
                  <p className="text-sm text-gray-600">Upload PDFs directly from Drive</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">
                  Click to Upload
                </span>
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </button>

            {/* Gmail */}
            <button
              onClick={() => window.location.href = '/upload?source=gmail'}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-red-300 hover:shadow-md transition-all cursor-pointer group w-full text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.548l8.073-6.055C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
                    <path d="M0 5.457v13.909c0 .904.732 1.636 1.636 1.636h3.819V11.73L12 16.64V9.548L3.927 3.493C2.309 2.28 0 3.434 0 5.457z" fill="#34A853"/>
                    <path d="M18.545 21.002h3.819c.904 0 1.636-.732 1.636-1.636V5.457c0-2.023-2.309-3.178-3.927-1.964L12 9.548v7.092l6.545-4.91v9.272z" fill="#FBBC04"/>
                    <path d="M12 16.64l6.545-4.91v-7.273L12 9.548v7.092z" fill="#C5221F"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-red-600 transition-colors">Gmail</h4>
                  <p className="text-sm text-gray-600">Send signed docs via email</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                  Coming Soon
                </span>
              </div>
            </button>

            {/* Google Docs */}
            <button
              onClick={() => window.location.href = '/upload?source=docs'}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group w-full text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#4285F4" d="M14.727 6.727H14V6h.727v.727zm0 1.454H14v.728h.727v-.728zm0 1.455H14v.727h.727v-.727zm0 1.454H14v.727h.727V11.09zm0 1.454H14v.728h.727v-.728zM20.364 5.273h-2.182V4.09c0-.4-.327-.727-.727-.727H6.545c-.4 0-.727.327-.727.727v1.182H3.636c-.4 0-.727.327-.727.727v13.09c0 .402.327.728.727.728h2.182V20.91c0 .402.327.728.727.728h10.91c.4 0 .727-.326.727-.727v-1.182h2.182c.4 0 .727-.326.727-.727V6c0-.4-.327-.727-.727-.727zM6.545 4.818h10.91v11.273c-.39.11-.727.408-.727.818v2.182H6.545V4.818zm11.637 15.273H7.273v-.728h10.182c.4 0 .727-.326.727-.727V7.273h.727v12.818h-.727zm2.182-2.182h-1.455V6.727c0-.4-.327-.727-.727-.727H7.273V4.818h12.364v12.364h.727V6z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">Google Docs</h4>
                  <p className="text-sm text-gray-600">Convert docs to PDF</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                  Coming Soon
                </span>
              </div>
            </button>

            {/* Google Sheets */}
            <button
              onClick={() => window.location.href = '/upload?source=sheets'}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-300 hover:shadow-md transition-all cursor-pointer group w-full text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path fill="#0F9D58" d="M19.636 4.364v15.272H4.364V4.364h15.272m0-1.455H4.364A1.455 1.455 0 0 0 2.91 4.364v15.272a1.455 1.455 0 0 0 1.454 1.455h15.272a1.455 1.455 0 0 0 1.455-1.455V4.364a1.455 1.455 0 0 0-1.455-1.455zM6.545 17.454h3.637v-2.908H6.545v2.908zm0-4.363h3.637V10.18H6.545v2.91zm0-4.364h3.637V5.818H6.545v2.91zm5.092 8.727h3.636v-2.908h-3.636v2.908zm0-4.363h3.636V10.18h-3.636v2.91zm0-4.364h3.636V5.818h-3.636v2.91z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-green-600 transition-colors">Google Sheets</h4>
                  <p className="text-sm text-gray-600">Bulk send documents</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                  Coming Soon
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Link 
            href="/upload"
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">Upload Document</h3>
                <p className="text-sm text-gray-600">Start a new signature request</p>
              </div>
              <svg className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </Link>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 opacity-60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">My Documents</h3>
                <p className="text-sm text-gray-600">View all sent & signed docs</p>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-semibold">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Matches Landing Page */}
      <footer className="bg-gray-900 text-gray-300 py-8 md:py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2 md:mb-3 block">
                SwiftSign
              </Link>
              <p className="text-xs md:text-sm text-gray-400">
                eSignature for Google Workspace teams. Unlimited signatures at $9/month.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Product</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Legal</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2 md:mb-3 text-sm md:text-base">Contact</h3>
              <ul className="space-y-1 md:space-y-2 text-xs md:text-sm">
                <li><a href="mailto:support@swiftsignapp.com" className="hover:text-white transition-colors">support@swiftsignapp.com</a></li>
                <li className="text-gray-400">Built for Google Workspace</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400 space-y-2">
            <p>© 2026 SwiftSign. All rights reserved.</p>
            <p className="text-xs">
              Google Workspace is a trademark of Google LLC. SwiftSign is not affiliated with or endorsed by Google.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}