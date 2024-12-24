import React from 'react'
import Hero from './sections/Hero'
import RegistrarPartners from './sections/RegistrarPartners'
import Features from './sections/Features'
import Faqs from './sections/Faqs'
import Footer from './sections/Footer'

const Page = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <Hero />
      <Features />
      <RegistrarPartners />
      <Faqs />
      <Footer />
    </div>
  )
}

export default Page