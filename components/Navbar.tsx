'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Hanken_Grotesk } from 'next/font/google'

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // Offset for fixed header
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className={`max-w-7xl mx-auto transition-all duration-300 ${
        isScrolled 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-3 opacity-95 hover:opacity-100'
      }`}>
        <nav className={`
          relative px-8 py-4 rounded-[20px]
          bg-white/90 backdrop-blur-xl
          border border-gray-100/20
          ${isScrolled 
            ? 'shadow-lg shadow-gray-900/[0.07]' 
            : 'shadow-md shadow-gray-900/[0.03]'}
          transition-all duration-300
          ${hankenGrotesk.className}
        `}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="Jaysel Chit Funds"
                width={130}
                height={35}
                className="h-9 w-auto"
                priority
              />
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="px-5 py-2.5 text-[15px] font-medium text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="px-5 py-2.5 text-[15px] font-medium text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="px-5 py-2.5 text-[15px] font-medium text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-colors"
              >
                FAQs
              </button>
              <button 
                onClick={() => scrollToSection('plans')}
                className="px-5 py-2.5 text-[15px] font-medium text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-50/80 transition-colors"
              >
                Plans
              </button>
            </div>

            {/* CTA Button */}
            <div className="flex items-center">
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2.5 text-[15px] font-medium rounded-xl"
              >
                Get Started
              </Button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
} 