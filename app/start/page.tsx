export default function StartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Start Your Financial Journey</h1>
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600 mb-8">
            We're excited to help you begin your path to financial security. Fill out the form below and one of our expert advisors will get in touch with you.
          </p>
          {/* Placeholder for form component */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-500">Form component will be added here</p>
          </div>
        </div>
      </div>
    </div>
  )
} 