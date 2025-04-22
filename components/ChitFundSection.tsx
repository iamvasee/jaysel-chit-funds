'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ChitFundSection() {
  const steps = [
    {
      number: "1",
      title: "Pick Your Plan",
      description: "Choose a chit that matches your goals",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tooltip: "Quick Access"
    },
    {
      number: "2",
      title: "Save Monthly",
      description: "Regular savings build your fund",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tooltip: "Steady Growth"
    },
    {
      number: "3",
      title: "Win Your Fund",
      description: "Get funds when you need them most",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8L8 16M12 12L16 16M8 8L10 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tooltip: "Flexible Access"
    },
    {
      number: "4",
      title: "Grow Your Wealth",
      description: "Benefit from the difference",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 7H21M21 12H13M21 17H13M6 7V17M6 17L3 14M6 17L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      tooltip: "High Returns"
    }
  ]

  const features = [
    {
      title: "Group Savings",
      description: "Pool resources for better returns",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Monthly Bid",
      description: "Fair and transparent selection",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12H15M12 9V15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Low Risk",
      description: "Secure and regulated investment",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M20.618 5.984C11.4435 5.85596 8.46725 5.74846 3.382 5.984C2.80395 6.02539 2.35159 6.47775 2.31421 7.0558C2.1167 9.82724 2 11.9089 2 12C2 12.0911 2.1167 14.1728 2.31421 16.9442C2.35159 17.5223 2.80395 17.9746 3.382 18.016C8.46725 18.2515 11.4435 18.144 20.618 18.016C21.196 17.9746 21.6484 17.5223 21.6858 16.9442C21.8833 14.1728 22 12.0911 22 12C22 11.9089 21.8833 9.82724 21.6858 7.0558C21.6484 6.47775 21.196 6.02539 20.618 5.984Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-secondary/[0.03]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-primary font-medium mb-4 uppercase tracking-wider">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Chit Funds Made Simple
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Save steadily. Borrow flexibly. All the power of chit funds—without the complexity.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="relative max-w-6xl mx-auto mb-24">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2 hidden md:block" />
          
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-lg hover:shadow-xl flex items-center justify-center relative z-10 mb-6 group-hover:scale-105 transition-all duration-300 border border-gray-100">
                    <span className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-primary text-white text-lg font-semibold flex items-center justify-center shadow-md">
                      {step.number}
                    </span>
                    <span className="text-primary transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
                  
                  {/* Enhanced Tooltip */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 absolute -top-12 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm py-2 px-4 rounded-lg whitespace-nowrap shadow-xl transform -translate-y-2 group-hover:translate-y-0">
                    {step.tooltip}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 border-8 border-transparent border-t-gray-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Features Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-6">
                <span className="text-primary">
                  {feature.icon}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 