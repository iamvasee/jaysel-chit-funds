'use client'

import Image from 'next/image'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ramesh Kumar",
      role: "Business Owner, Chennai",
      text: "Jaysel Chit Funds' attention to detail and professional approach made our financial journey truly enjoyable. Their chit fund options were perfectly tailored to our business needs.",
      rating: 5,
      image: "/avatars/avatar-1.png"
    },
    {
      name: "Priya Devi",
      role: "School Teacher, Coimbatore",
      text: "Jaysel is a financial partner you can rely on. They understood our family's needs accurately and provided the perfect chit fund solution that helped us save for our children's education.",
      rating: 5,
      image: "/avatars/avatar-2.png"
    },
    {
      name: "Rajesh Mehta",
      role: "Entrepreneur, Salem",
      text: "Their expertise in chit funds is unmatched. They understood our unique business requirements and added a touch of personalization that made our investment journey exceptional.",
      rating: 5,
      image: "/avatars/avatar-3.png"
    },
    {
      name: "Lakshmi Narayanan",
      role: "Retired Professional, Erode",
      text: "Working with Jaysel Chit Funds was fantastic! They nailed our retirement savings vision, delivering plans that exceeded our expectations. Highly recommend!",
      rating: 5,
      image: "/avatars/avatar-4.png"
    },
    {
      name: "Senthil Kumar",
      role: "Shop Owner, Dharapuram",
      text: "Impressed doesn't cover it! Our experience with Jaysel went from good to outstanding. Their team understands the local business community's needs perfectly.",
      rating: 5,
      image: "/avatars/avatar-5.png"
    },
    {
      name: "Meena Sundaram",
      role: "Homemaker, Mulanur",
      text: "What a wonderful experience! The way they handled our family's savings needs was exceptional. Their transparent process made everything so simple.",
      rating: 5,
      image: "/avatars/avatar-6.png"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">TESTIMONIALS</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What our members said <br />
              about <span className="italic">Jaysel</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6">
                  {testimonial.text}
                </p>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i}
                      className="w-5 h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 