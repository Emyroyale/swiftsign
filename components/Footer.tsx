export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-900/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold text-white mb-3">SwiftSign</div>
            <p className="text-white/60 text-sm">
              eSignature for Google Workspace teams. Unlimited signatures at $9/month.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-white/60 hover:text-white">Home</a></li>
              <li><a href="/dashboard" className="text-white/60 hover:text-white">Dashboard</a></li>
              <li><a href="#pricing" className="text-white/60 hover:text-white">Pricing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/60">support@swiftsign.com</li>
              <li className="text-white/60">Built for Google Workspace</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-xs">
            © 2025 SwiftSign. All rights reserved. Launching April 2026.
          </p>
        </div>
      </div>
    </footer>
  )
}