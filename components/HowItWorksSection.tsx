import Image from 'next/image'

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Chit Funds Made Simple
          </h2>
          <p className="text-xl text-gray-600">
            Save consistently, borrow when you need. One flexible solution, infinite possibilities.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Image
                  src="/icons/join-icon.svg"
                  alt="Join"
                  width={40}
                  height={40}
                  className="text-primary"
                />
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Join</h3>
            <p className="text-gray-600">Choose a chit that matches your goals</p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Image
                  src="/icons/contribute-icon.svg"
                  alt="Contribute Monthly"
                  width={40}
                  height={40}
                  className="text-primary"
                />
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Contribute Monthly</h3>
            <p className="text-gray-600">Regular savings build your fund</p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-6 relative">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Image
                  src="/icons/win-icon.svg"
                  alt="Win/Save"
                  width={40}
                  height={40}
                  className="text-primary"
                />
              </div>
              <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2"></div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Win/Save</h3>
            <p className="text-gray-600">Get funds when you need them most</p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <div className="mb-6">
              <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Image
                  src="/icons/earn-icon.svg"
                  alt="Earn Returns"
                  width={40}
                  height={40}
                  className="text-primary"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn Returns</h3>
            <p className="text-gray-600">Benefit from the difference</p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Image
                src="/icons/group-icon.svg"
                alt="Group Savings"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Group Savings</h3>
            <p className="text-gray-600">Pool resources for better returns through our trusted community-based saving system</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Image
                src="/icons/bid-icon.svg"
                alt="Monthly Bid"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Monthly Bid</h3>
            <p className="text-gray-600">Participate in transparent monthly auctions to access funds when you need them most</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Image
                src="/icons/shield-icon.svg"
                alt="Low Risk"
                width={24}
                height={24}
                className="text-primary"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">Low Risk</h3>
            <p className="text-gray-600">Your investments are secure and regulated, backed by our 50 years of trusted experience</p>
          </div>
        </div>
      </div>
    </section>
  )
} 