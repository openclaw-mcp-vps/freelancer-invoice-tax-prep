export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers &amp; Contractors
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Stop Dreading Tax Season.
          <br />
          <span className="text-[#58a6ff]">AI Sorts Your Expenses Automatically.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          TaxTrack connects to your bank via Plaid, uses OpenAI to categorize every business expense, and generates tax-ready reports — so you spend minutes, not days, at tax time.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Start for $29/mo — Cancel Anytime
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No credit card required for 7-day trial. Works with 12,000+ banks.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🏦', title: 'Secure Bank Sync', desc: 'Connect via Plaid — read-only access, bank-level encryption.' },
            { icon: '🤖', title: 'AI Categorization', desc: 'OpenAI tags every transaction: office, travel, software, meals, and more.' },
            { icon: '📊', title: 'Tax-Ready Reports', desc: 'Export IRS Schedule C-ready summaries in one click.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</p>
          <div className="text-5xl font-extrabold text-white mb-1">$29<span className="text-xl font-normal text-[#8b949e]">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need. No hidden fees.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited bank account connections',
              'AI categorization for all transactions',
              'Schedule C export (PDF &amp; CSV)',
              'Quarterly estimated tax reminders',
              'Priority email support'
            ].map(item => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'Is my bank data secure?',
              a: 'Yes. We use Plaid for read-only bank connections with 256-bit encryption. We never store your banking credentials and cannot move money.'
            },
            {
              q: 'Which expense categories does the AI support?',
              a: 'TaxTrack covers all IRS Schedule C categories: advertising, car &amp; truck, office expenses, travel, meals, utilities, software subscriptions, and more.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Absolutely. Cancel with one click from your dashboard — no questions asked, no cancellation fees. Your data exports are always available.'
            }
          ].map(item => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2" dangerouslySetInnerHTML={{ __html: item.q }} />
              <p className="text-sm text-[#8b949e]" dangerouslySetInnerHTML={{ __html: item.a }} />
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} TaxTrack. Built for independent contractors earning $50k+.
      </footer>
    </main>
  )
}
