import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg rounded-full mx-4' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Jaysel Chit Funds"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-primary font-medium transition-colors">
              About Us
            </Link>
            <Link href="#chit-options" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Chit Options
            </Link>
            <Link href="#how-it-works" className="text-gray-700 hover:text-primary font-medium transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-700 hover:text-primary font-medium transition-colors">
              FAQs
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">
              Contact Us
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="#join"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Join a Chit Today
          </Link>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 