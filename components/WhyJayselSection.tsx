import Image from 'next/image'

const WhyJayselSection = () => {
  return (
    <section id="why-jaysel" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why 100,000+ Trust Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with Jaysel Chit Funds
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Trusted Heritage */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/trust-icon.svg"
                alt="Trusted Heritage"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Trusted Heritage</h3>
            <p className="text-gray-600">
              Part of the Surabhi Group legacy of 50+ years
            </p>
          </div>

          {/* Flexible Options */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/flexible-icon.svg"
                alt="Flexible Options"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Flexible Options</h3>
            <p className="text-gray-600">
              ₹50,000 to ₹50 Lakhs — plans for all goals
            </p>
          </div>

          {/* Transparent Practices */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/transparent-icon.svg"
                alt="Transparent Practices"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparent Practices</h3>
            <p className="text-gray-600">
              No hidden fees. No surprises.
            </p>
          </div>

          {/* Social Commitment */}
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <Image
                src="/social-icon.svg"
                alt="Social Commitment"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Social Commitment</h3>
            <p className="text-gray-600">
              30% of efforts reinvested into the community
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyJayselSection 