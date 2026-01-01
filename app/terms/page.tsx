import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
            SwiftSign
          </Link>
          <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium text-sm">
            ← Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 1, 2026</p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using SwiftSign ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
              If you disagree with any part of these terms, you may not access the Service.
            </p>
            <p className="text-gray-700">
              SwiftSign provides electronic signature services that integrate with Google Workspace. These Terms 
              govern your use of our Service, including all features, functionality, and content.
            </p>
          </section>

          {/* Fair Use Policy */}
          <section className="mb-12 bg-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Fair Use Policy</h2>
            <p className="text-gray-700 mb-4">
              SwiftSign's "unlimited" plans are designed for normal business operations. We define normal business 
              use as typical business document signing workflows including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Employment contracts and agreements</li>
              <li>Non-disclosure agreements (NDAs)</li>
              <li>Client contracts and proposals</li>
              <li>Internal company documents</li>
              <li>Purchase orders and invoices</li>
              <li>Partnership agreements</li>
              <li>Real estate documents</li>
            </ul>
            <p className="text-gray-700 mb-4 font-semibold">
              Activities inconsistent with normal business use include:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Reselling or redistributing SwiftSign access to third parties</li>
              <li>Operating a commercial document signing service using SwiftSign</li>
              <li>Automated bulk document processing beyond typical business needs</li>
              <li>Usage patterns that negatively impact service performance for other users</li>
              <li>Storing or processing documents unrelated to legitimate business purposes</li>
            </ul>
            <p className="text-gray-700">
              We reserve the right to contact users whose usage significantly exceeds typical business patterns 
              to discuss appropriate pricing or service adjustments. We will provide notice and opportunity to 
              adjust usage before taking any action to limit or suspend service.
            </p>
          </section>

          {/* Account Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Terms</h2>
            <p className="text-gray-700 mb-4">
              You must be 18 years or older to use this Service. You are responsible for maintaining the security 
              of your account and password. SwiftSign cannot and will not be liable for any loss or damage from 
              your failure to comply with this security obligation.
            </p>
            <p className="text-gray-700 mb-4">
              You are responsible for all content posted and activity that occurs under your account.
            </p>
            <p className="text-gray-700">
              One person or legal entity may not maintain more than one free account.
            </p>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Billing</h3>
            <p className="text-gray-700 mb-4">
              SwiftSign offers monthly and annual subscription plans. All fees are exclusive of taxes, levies, 
              or duties imposed by taxing authorities, and you shall be responsible for payment of all such taxes, 
              levies, or duties.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Grandfathered Pricing</h3>
            <p className="text-gray-700 mb-4">
              The first 100 users who subscribe to SwiftSign will receive grandfathered pricing of $9.99/month 
              for life. This pricing will remain in effect for the lifetime of your active subscription, even if 
              standard pricing increases. If you cancel your subscription, you forfeit your grandfathered pricing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Refunds</h3>
            <p className="text-gray-700 mb-4">
              Monthly subscriptions are non-refundable. Annual subscriptions may be refunded within 30 days of 
              initial purchase if you have not used the service extensively (defined as fewer than 10 signatures).
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Price Changes</h3>
            <p className="text-gray-700">
              SwiftSign reserves the right to change pricing for new subscribers. Existing subscribers with 
              active subscriptions will maintain their current pricing for the duration of their subscription period. 
              We will provide 30 days notice of any price changes for subscription renewals.
            </p>
          </section>

          {/* Cancellation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation and Termination</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cancellation by You</h3>
            <p className="text-gray-700 mb-4">
              You may cancel your subscription at any time through your account settings. Cancellation is effective 
              at the end of your current billing period. You will retain access to the Service until the end of your 
              paid period.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Termination by SwiftSign</h3>
            <p className="text-gray-700 mb-4">
              SwiftSign reserves the right to suspend or terminate your account if you breach these Terms, including 
              violation of the Fair Use Policy. We will provide notice and opportunity to remedy the breach before 
              termination, except in cases of severe abuse or illegal activity.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data After Cancellation</h3>
            <p className="text-gray-700">
              After cancellation, you will have 30 days to download your signed documents. After 30 days, we may 
              delete your account data. We recommend exporting important documents before canceling.
            </p>
          </section>

          {/* Legal Compliance */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Legal Compliance and Electronic Signatures</h2>
            <p className="text-gray-700 mb-4">
              SwiftSign signatures comply with the U.S. Electronic Signatures in Global and National Commerce Act 
              (ESIGN Act) and the Uniform Electronic Transactions Act (UETA). Electronic signatures created through 
              SwiftSign are legally binding and enforceable.
            </p>
            <p className="text-gray-700 mb-4">
              You are responsible for ensuring that your use of electronic signatures complies with all applicable 
              laws in your jurisdiction. SwiftSign does not provide legal advice.
            </p>
            <p className="text-gray-700">
              You agree not to use SwiftSign for any illegal purposes or in violation of any local, state, national, 
              or international law.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Service and its original content, features, and functionality are owned by SwiftSign and are 
              protected by international copyright, trademark, patent, trade secret, and other intellectual 
              property laws.
            </p>
            <p className="text-gray-700 mb-4">
              You retain ownership of all documents you upload and signatures you create using SwiftSign. You grant 
              SwiftSign a limited license to store, process, and transmit your content solely for the purpose of 
              providing the Service.
            </p>
          </section>

          {/* Google Workspace */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Google Workspace Integration</h2>
            <p className="text-gray-700 mb-4">
              SwiftSign integrates with Google Workspace through publicly available APIs. SwiftSign is not affiliated 
              with, endorsed by, or sponsored by Google LLC.
            </p>
            <p className="text-gray-700 mb-4">
              Your use of Google Workspace in connection with SwiftSign is subject to Google's terms of service and 
              privacy policy. SwiftSign is not responsible for Google's services or any issues arising from Google 
              Workspace.
            </p>
            <p className="text-gray-700">
              You must have appropriate permissions and licenses to use Google Workspace features through SwiftSign.
            </p>
          </section>

          {/* Liability */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall SwiftSign, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential, or punitive damages, including without 
              limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p className="text-gray-700">
              Our total liability to you for all claims arising from or related to the Service shall not exceed 
              the amount you paid to SwiftSign in the 12 months prior to the claim.
            </p>
          </section>

          {/* Warranties */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Disclaimer of Warranties</h2>
            <p className="text-gray-700 mb-4">
              The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or 
              implied, including, but not limited to, implied warranties of merchantability, fitness for a particular 
              purpose, non-infringement, or course of performance.
            </p>
            <p className="text-gray-700">
              SwiftSign does not warrant that the Service will be uninterrupted, secure, or error-free, or that 
              defects will be corrected.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will 
              provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-700">
              By continuing to access or use our Service after revisions become effective, you agree to be bound by 
              the revised terms.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms, please contact us:
            </p>
            <p className="text-gray-700">
              Email: <a href="mailto:support@swiftsignapp.com" className="text-blue-600 hover:text-blue-700">support@swiftsignapp.com</a>
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
            <p className="text-gray-700">
              These Terms shall be governed by and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions. Any disputes arising from these Terms or the Service 
              shall be resolved through binding arbitration in accordance with the rules of the American Arbitration 
              Association.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            <a href="mailto:support@swiftsignapp.com" className="hover:text-gray-900">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  )
}