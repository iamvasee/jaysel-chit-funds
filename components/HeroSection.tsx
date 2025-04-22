import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-left max-w-xl">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Secure Your{' '}
              <span className="relative inline-block">
                Family's Future
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 -skew-x-12"></div>
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Start your journey towards financial freedom with personalized savings plans designed for Indian families. Join over 60,000 families who trust us with their financial growth.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/start"
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Start Your Plan
              </Link>
              <Link
                href="/plans"
                className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 transition-colors"
              >
                View Plans
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="bg-green-500 p-1 rounded-full">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Tax Benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500 p-1 rounded-full">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Flexible Plans</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-500 p-1 rounded-full">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Expert Guidance</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] lg:h-[600px]">
            <Image
              src="/family-hero.png"
              alt="Happy Indian family planning their financial future"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
} 