import React from 'react'
import Hero from './sections/Hero'
import RegistrarPartners from './sections/RegistrarPartners'
import Features from './sections/Features'
import Faqs from './sections/Faqs'
import AppShowcase from './sections/AppShowcase'
const Page = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <Hero />
      <AppShowcase />
      <Features />
      <RegistrarPartners />
      <Faqs />
    </div>
  )
}

export default Page