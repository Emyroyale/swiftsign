export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-white">SwiftSign</div>
          <button className="bg-white text-blue-900 hover:bg-blue-50 px-5 py-2 rounded-lg font-semibold text-sm">
            Sign In
          </button>
        </div>
      </nav>

      {/* Hero Section - Compact */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Stop Paying DocuSign $40/Month
          </h1>
          <p className="text-2xl text-blue-200 mb-2">
            eSignatures for Google Workspace at $9/month. Flat.
          </p>
          <p className="text-lg text-white/70 mb-6">
            No per-user fees. No envelope limits. No BS.
          </p>
          
          {/* Email Capture */}
          <div className="max-w-xl mx-auto flex gap-3 mb-2">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-lg text-base border-2 border-white/20 bg-white/10 text-white placeholder-white/50 focus:border-blue-400 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg shadow-xl transition-all whitespace-nowrap">
              Get Early Access
            </button>
          </div>
          <p className="text-xs text-white/60">
            Coming Soon • First 100 users get locked-in pricing forever
          </p>
        </div>

        {/* Problem vs Solution - Side by Side */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Problem Column */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Why DocuSign Sucks</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-red-400 font-bold mt-1">✕</span>
                <p className="text-sm"><strong>$2,400/year</strong> for 5 users</p>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-red-400 font-bold mt-1">✕</span>
                <p className="text-sm">"Envelope limits" force upgrades</p>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-red-400 font-bold mt-1">✕</span>
                <p className="text-sm">Bloated with unused features</p>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-red-400 font-bold mt-1">✕</span>
                <p className="text-sm">Zero Google Workspace integration</p>
              </div>
            </div>
          </div>

          {/* Solution Column */}
          <div className="bg-green-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Why SwiftSign Wins</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <p className="text-sm"><strong>$9/month total</strong> for your whole team</p>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <p className="text-sm">Unlimited signatures, unlimited users</p>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <p className="text-sm">Simple: 5 features that work perfectly</p>
              </div>
              <div className="flex items-start gap-2 text-white/90">
                <span className="text-green-400 font-bold mt-1">✓</span>
                <p className="text-sm">Built into Google Drive natively</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Offer - Compact */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-bold text-white mb-2">$9<span className="text-xl">/month</span></h2>
              <p className="text-blue-100 mb-4">Everything included. Cancel anytime.</p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg shadow-2xl transition-all transform hover:scale-105 w-full md:w-auto">
                Join the Waitlist
              </button>
            </div>
            
            <div className="space-y-2 text-white">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span>Unlimited signatures</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span>Unlimited team members</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span>Google Drive integration</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span>Email support</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-400">✓</span>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/20 text-center">
            <p className="text-sm text-blue-100">
              <strong>First 100 users:</strong> Locked-in pricing forever. No increases. Ever.
            </p>
          </div>
        </div>

        {/* ROI - Super Compact */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">You Save $372/Year Minimum</h3>
          
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <div className="text-xs text-white/60 mb-1">DOCUSIGN</div>
              <div className="text-2xl font-bold text-red-400">$480</div>
              <div className="text-xs text-white/60">per year (1 user)</div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-white/40 text-2xl">→</div>
            </div>
            <div>
              <div className="text-xs text-white/60 mb-1">SWIFTSIGN</div>
              <div className="text-2xl font-bold text-green-400">$108</div>
              <div className="text-xs text-white/60">per year (whole team)</div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-1">Save $372/Year</div>
            <p className="text-xs text-white/70">Got 5 users? Save $1,872/year</p>
          </div>
        </div>
      </div>

      {/* Footer - Minimal */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-lg font-bold text-white mb-1">SwiftSign</div>
          <p className="text-white/50 text-xs">eSignature for Google Workspace • © 2025</p>
        </div>
      </div>
    </div>
  );
}