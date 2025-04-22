'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      question: "Do you provide a complete design style?",
      answer: "Yes, we provide a comprehensive design style for all our chit fund schemes. Our plans are professionally structured with clear terms, transparent documentation, and modern digital interfaces for easy management. Each scheme is designed to meet specific financial goals while maintaining compliance with regulatory requirements."
    },
    {
      question: "How was the Terms & Condition?",
      answer: "Our terms and conditions are transparent, fair, and fully compliant with the Chit Funds Act. They clearly outline member rights, payment schedules, auction procedures, and withdrawal policies. All terms are explained in simple language, and our team is always available to clarify any doubts. We ensure complete disclosure of all fees, charges, and operational procedures."
    },
    {
      question: "Do you have any terms & conditions?",
      answer: "Yes, we have comprehensive terms and conditions that protect both the company and our members. Key aspects include: eligibility criteria (18+ years, valid ID proof), payment terms (monthly contributions, late payment policies), auction rules, prized subscriber responsibilities, and early termination conditions. All members receive a detailed copy upon enrollment."
    },
    {
      question: "How much we can buy this product?",
      answer: "Our chit fund schemes range from ₹50,000 to ₹50 lakhs, catering to diverse financial needs. The monthly contribution depends on your chosen chit value. For example, a ₹1 lakh chit typically requires monthly contributions of around ₹5,000-6,000. We offer flexible options to suit different budgets and financial goals."
    },
    {
      question: "How to apply for a chit fund?",
      answer: "Applying for a chit fund is simple: 1) Visit our office or apply online, 2) Submit required documents (ID proof, address proof, income proof), 3) Choose your preferred chit scheme, 4) Complete the application form, 5) Make the initial deposit, and 6) Receive your membership certificate. Our team will guide you through each step."
    },
    {
      question: "How was the license?",
      answer: "We operate under a valid chit fund license issued by the state government (License No: CIN: U64990TZ2024PTC031966). We strictly adhere to all regulatory requirements and are regularly audited. Our license and compliance certificates are publicly displayed at our office and can be verified through official channels."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span className="ml-6">
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        openIndex === index ? 'rotate-45' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </span>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 