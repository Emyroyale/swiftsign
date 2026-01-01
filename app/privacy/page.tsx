import Link from 'next/link'

export default function PrivacyPolicy() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 1, 2026</p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-4">
              SwiftSign ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
              how we collect, use, disclose, and safeguard your information when you use our electronic signature 
              service ("Service").
            </p>
            <p className="text-gray-700">
              By using SwiftSign, you agree to the collection and use of information in accordance with this Privacy 
              Policy. If you do not agree with our policies and practices, please do not use our Service.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We collect the following personal information:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Account Information:</strong> Email address, name, password (encrypted)</li>
              <li><strong>Billing Information:</strong> Payment card details (processed securely by our payment processor, not stored by us)</li>
              <li><strong>Profile Information:</strong> Company name, job title (optional)</li>
              <li><strong>Google Workspace Information:</strong> When you connect Google Workspace, we access your Google account email and basic profile information</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Document and Signature Data</h3>
            <p className="text-gray-700 mb-4">We collect and store:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Documents:</strong> PDFs and files you upload for signing</li>
              <li><strong>Signatures:</strong> Electronic signature data, including typed, drawn, or uploaded signatures</li>
              <li><strong>Signature Metadata:</strong> IP address, timestamp, device information, and email addresses of signers</li>
              <li><strong>Audit Trails:</strong> Complete history of document actions (sent, viewed, signed, completed)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Information</h3>
            <p className="text-gray-700 mb-4">We automatically collect:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Log Data:</strong> IP address, browser type, operating system, pages visited, time spent</li>
              <li><strong>Device Information:</strong> Device type, unique device identifiers</li>
              <li><strong>Cookies:</strong> Session cookies, analytics cookies, preference cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Google Workspace Data</h3>
            <p className="text-gray-700 mb-4">
              When you integrate SwiftSign with Google Workspace, we access:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Google Drive:</strong> Files you choose to upload for signing</li>
              <li><strong>Gmail:</strong> Email address for sending signature requests (we do not read your emails)</li>
              <li><strong>Google Account:</strong> Basic profile information (name, email, profile picture)</li>
            </ul>
            <p className="text-gray-700">
              We only access Google Workspace data that is necessary to provide our Service. We do not access or 
              store any Google Workspace data beyond what is required for document signing functionality.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Provide the Service:</strong> Create accounts, process documents, facilitate electronic signatures</li>
              <li><strong>Process Payments:</strong> Bill your subscription and process transactions</li>
              <li><strong>Communicate:</strong> Send service updates, security alerts, and support messages</li>
              <li><strong>Improve the Service:</strong> Analyze usage patterns, fix bugs, develop new features</li>
              <li><strong>Legal Compliance:</strong> Maintain audit trails, comply with legal requirements</li>
              <li><strong>Security:</strong> Detect fraud, prevent abuse, protect against security threats</li>
              <li><strong>Marketing:</strong> Send promotional emails (you can opt out at any time)</li>
            </ul>
          </section>

          {/* How We Share Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We share information only in these circumstances:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Providers</h3>
            <p className="text-gray-700 mb-4">
              We share data with trusted third-party service providers who help us operate our Service:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Cloud Hosting:</strong> Vercel (hosting), Supabase (database and storage)</li>
              <li><strong>Authentication:</strong> Clerk (user authentication and management)</li>
              <li><strong>Payment Processing:</strong> Stripe (payment processing - they handle your card information)</li>
              <li><strong>Email Service:</strong> For sending transactional emails and signature requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Document Recipients</h3>
            <p className="text-gray-700 mb-4">
              When you send a document for signature, we share that document and related information with the 
              recipients you specify.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Requirements</h3>
            <p className="text-gray-700 mb-4">
              We may disclose your information if required by law, court order, or government request, or to:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Comply with legal obligations</li>
              <li>Protect our rights and property</li>
              <li>Prevent fraud or security issues</li>
              <li>Protect the safety of our users</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Transfers</h3>
            <p className="text-gray-700">
              If SwiftSign is involved in a merger, acquisition, or sale of assets, your information may be 
              transferred. We will notify you before your information becomes subject to a different privacy policy.
            </p>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Storage and Security</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Where We Store Data</h3>
            <p className="text-gray-700 mb-4">
              Your data is stored securely on cloud servers located in the United States. We use industry-standard 
              security measures including:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Encryption in transit (TLS/SSL)</li>
              <li>Encryption at rest</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication</li>
              <li>Secure backup systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Retention</h3>
            <p className="text-gray-700 mb-4">We retain your information:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Account Data:</strong> For as long as your account is active</li>
              <li><strong>Signed Documents:</strong> For 7 years after signing (for legal compliance)</li>
              <li><strong>Audit Trails:</strong> For 7 years (required for legal validity of signatures)</li>
              <li><strong>Deleted Accounts:</strong> We delete most data within 30 days, but retain audit trails for legal compliance</li>
            </ul>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-12 bg-blue-50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights and Choices</h2>
            <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Access and Download</h3>
            <p className="text-gray-700 mb-4">
              You can access, review, and download your account information and documents at any time through your 
              account dashboard.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Correction</h3>
            <p className="text-gray-700 mb-4">
              You can update your account information at any time through your account settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Deletion</h3>
            <p className="text-gray-700 mb-4">
              You can request deletion of your account and personal information by contacting us at 
              support@swiftsignapp.com. Note that we must retain certain information (signed documents and audit 
              trails) for legal compliance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Opt-Out</h3>
            <p className="text-gray-700 mb-4">
              You can opt out of marketing emails by clicking the "unsubscribe" link in any marketing email or 
              updating your preferences in account settings.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies</h3>
            <p className="text-gray-700 mb-4">
              You can control cookies through your browser settings. Note that disabling cookies may affect Service 
              functionality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">GDPR Rights (EEA Residents)</h3>
            <p className="text-gray-700 mb-4">
              If you are in the European Economic Area, you have additional rights under GDPR:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure ("right to be forgotten")</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
            <p className="text-gray-700 mb-4">We use cookies and similar tracking technologies:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li><strong>Essential Cookies:</strong> Required for Service functionality (login, session management)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how you use the Service</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p className="text-gray-700">
              You can control cookies through your browser settings. Most browsers allow you to refuse cookies or 
              delete existing cookies.
            </p>
          </section>

          {/* Third Party Services */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              Our Service integrates with Google Workspace. Your use of Google Workspace is governed by Google's 
              Privacy Policy and Terms of Service, which can be found at:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Google Privacy Policy: <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-700">https://policies.google.com/privacy</a></li>
              <li>Google Terms of Service: <a href="https://policies.google.com/terms" className="text-blue-600 hover:text-blue-700">https://policies.google.com/terms</a></li>
            </ul>
            <p className="text-gray-700">
              We are not responsible for the privacy practices of Google or other third-party services.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              SwiftSign is not intended for use by anyone under the age of 18. We do not knowingly collect personal 
              information from children under 18. If we discover that we have collected information from a child 
              under 18, we will delete that information immediately. If you believe we have collected information 
              from a child, please contact us at support@swiftsignapp.com.
            </p>
          </section>

          {/* International Users */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              SwiftSign is based in the United States. If you access our Service from outside the United States, 
              your information will be transferred to, stored, and processed in the United States.
            </p>
            <p className="text-gray-700">
              By using SwiftSign, you consent to the transfer of your information to the United States and other 
              countries where our service providers operate. We take appropriate safeguards to ensure your data is 
              protected in accordance with this Privacy Policy.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
              <li>Posting the new Privacy Policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending an email notification for significant changes</li>
            </ul>
            <p className="text-gray-700">
              Your continued use of the Service after changes become effective constitutes acceptance of the updated 
              Privacy Policy.
            </p>
          </section>

          {/* Contact */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this Privacy Policy or how we handle your information, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-xl">
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> <a href="mailto:support@swiftsignapp.com" className="text-blue-600 hover:text-blue-700">support@swiftsignapp.com</a>
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Privacy Requests:</strong> <a href="mailto:privacy@swiftsignapp.com" className="text-blue-600 hover:text-blue-700">privacy@swiftsignapp.com</a>
              </p>
              <p className="text-gray-700">
                We will respond to privacy-related requests within 30 days.
              </p>
            </div>
          </section>

          {/* Data Protection Officer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Data Protection Officer</h2>
            <p className="text-gray-700">
              For GDPR-related inquiries or to exercise your rights under GDPR, you can contact our Data Protection 
              Officer at privacy@swiftsignapp.com. You also have the right to lodge a complaint with a supervisory 
              authority in your jurisdiction.
            </p>
          </section>
        </div>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <Link href="/terms" className="hover:text-gray-900">Terms of Service</Link>
            <a href="mailto:support@swiftsignapp.com" className="hover:text-gray-900">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  )
}