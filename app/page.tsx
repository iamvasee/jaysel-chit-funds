'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Hanken_Grotesk } from 'next/font/google'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import Navbar from '@/components/Navbar'
import ChitFundSection from '@/components/ChitFundSection'
import WhyJayselSection from '@/components/WhyJayselSection'
import ChitOptionsSection from '@/components/ChitOptionsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import Footer from '@/components/Footer'

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    document.querySelectorAll('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    const loadTally = () => {
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        script.onload = () => {
          // @ts-ignore
          if (window.Tally) {
            // @ts-ignore
            window.Tally.loadEmbeds();
          }
        };
        document.body.appendChild(script);
      }
    };

    loadTally();
  }, []);

  return (
    <main className={`min-h-screen ${hankenGrotesk.className}`}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ChitFundSection />
      <WhyJayselSection />
      <TestimonialsSection />
      <FAQSection />
      <ChitOptionsSection />
      <Footer />
    </main>
  )
}