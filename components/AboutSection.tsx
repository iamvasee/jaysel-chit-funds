export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              About Jaysel Chit Funds
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              As the newest jewel in the crown of the prestigious Surabhi Group, we bring over five decades of financial expertise to your doorstep. We're not just another financial service—we're your partner in turning dreams into reality.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100K+</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹50L</div>
              <div className="text-gray-600">Maximum Chit Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">30%</div>
              <div className="text-gray-600">Social Welfare Focus</div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* What Sets Us Apart */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">What Sets Us Apart</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Trusted Heritage</h4>
                    <p className="text-gray-600">Part of the Surabhi Group with 50 years of financial excellence and a customer base of over 100,000 satisfied individuals.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Solutions</h4>
                    <p className="text-gray-600">Customized chit fund options ranging from ₹50,000 to ₹50 lakhs, ensuring a perfect fit for every financial goal.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Social Commitment</h4>
                    <p className="text-gray-600">30% of our efforts are dedicated to social welfare initiatives that create positive impact across our region.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* The Surabhi Group Legacy */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">The Surabhi Group Legacy</h3>
              <p className="text-gray-600 mb-6">
                For over 50 years, the Surabhi Group has been a trusted name in financial services, serving more than 100,000 customers across India. Our expertise spans vehicle loans, property loans, gold loans, and more.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <blockquote className="text-gray-700 italic">
                  "At Surabhi Group, we believe in empowering individuals to achieve financial independence through customized solutions that address both short-term needs and long-term goals."
                </blockquote>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-primary/5 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Transparency</h4>
                  <p className="text-sm text-gray-600">Clear, straightforward processes with no hidden fees</p>
                </div>
                <div className="bg-primary/5 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2">Flexibility</h4>
                  <p className="text-sm text-gray-600">Access funds when you need them most</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 