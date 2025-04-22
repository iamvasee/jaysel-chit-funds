import { useState } from 'react'
import Link from 'next/link'

type PlanType = {
  range: string
  purposes: string[]
  terms: string[]
  features: string[]
}

type PlansType = {
  starter: PlanType
  growth: PlanType
  premium: PlanType
}

const ChitOptionsSection = () => {
  const [activeTab, setActiveTab] = useState<keyof PlansType>('starter')

  const plans: PlansType = {
    starter: {
      range: '₹50,000 – ₹2L',
      purposes: ['Education', 'Small Business', 'Emergency Fund'],
      terms: ['12 months', '24 months'],
      features: ['Low monthly contribution', 'Quick approval', 'Basic documentation']
    },
    growth: {
      range: '₹3L – ₹10L',
      purposes: ['Business Expansion', 'Property Down Payment', 'Major Life Events'],
      terms: ['24 months', '36 months'],
      features: ['Medium monthly contribution', 'Priority processing', 'Flexible terms']
    },
    premium: {
      range: '₹15L – ₹50L',
      purposes: ['Large Business Investment', 'Property Purchase', 'Wealth Building'],
      terms: ['36 months', '48 months'],
      features: ['High monthly contribution', 'VIP service', 'Customized plans']
    }
  }

  return (
    <section id="chit-options" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your Goals, Our Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect chit fund option for your financial journey
          </p>
        </div>

        {/* Tabs */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center space-x-4 mb-8">
            {(Object.keys(plans) as Array<keyof PlansType>).map((plan) => (
              <button
                key={plan}
                onClick={() => setActiveTab(plan)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  activeTab === plan
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.charAt(0).toUpperCase() + plan.slice(1)}
              </button>
            ))}
          </div>

          {/* Plan Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {plans[activeTab].range}
              </h3>
              <p className="text-gray-600">Perfect for your financial goals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Perfect For</h4>
                <ul className="space-y-3">
                  {plans[activeTab].purposes.map((purpose: string) => (
                    <li key={purpose} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {purpose}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Features</h4>
                <ul className="space-y-3">
                  {plans[activeTab].features.map((feature: string) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-primary mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-100 text-gray-700 rounded-full font-semibold hover:bg-gray-200 transition-colors"
              >
                Speak to Advisor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChitOptionsSection 