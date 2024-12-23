'use client'
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "When will you launch?",
      answer: "We are planning to launch in the first few weeks of January 2025."
    },
    {
      question: "What's in it for me as an early joiner?",
      answer: "Early joiners will have the exclusive chance to win premium features of our platform completely for free for the first few months. This is our way of thanking early supporters."
    },
    {
      question: "How does the domain reselling process work?",
      answer: "Our platform simplifies domain reselling into a few easy steps. List your domain, set your price, and we'll connect you with potential buyers. Once a buyer shows interest, our secure transaction system handles the transfer and payment process."
    },
    {
      question: "How do you determine domain valuations?",
      answer: "We use a combination of factors including domain length, keywords, extension popularity, historical sales data, and current market trends to provide accurate valuations. Our algorithm is regularly updated to reflect the latest market conditions."
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about our domain marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="relative"
            >
              <button
                className={`w-full h-full text-left p-8 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 border border-gray-700 ${
                  openIndex === index ? 'border-blue-500' : ''
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                    <BiChevronDown 
                      className={`w-6 h-6 text-blue-400 transition-transform duration-300 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-48' : 'max-h-0'
                    }`}>
                      <p className="text-gray-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs
