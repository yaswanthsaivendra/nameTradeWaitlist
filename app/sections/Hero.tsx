'use client';
import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');
  const waitlistCount = 142; // This should be fetched from your backend

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your waitlist submission logic here
  };

  return (
    <section data-aos="fade-up" className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Calling all indie hackers, developers, and tech enthusiasts!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Buy, sell, and showcase domains effortlessly with tools built for the tech-savvy. 
            Get real-time offers, portfolio valuation, price alerts on favorites, and powerful 
            management tools designed specifically for the developer community.
          </p>

          <p className="text-lg italic text-gray-400">
            &quot;Let&apos;s ensure, no domain goes into vain!&quot;
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
                          text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                          focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary/80 rounded-lg 
                         font-semibold transition-colors duration-200 text-black"
              >
                Join the Waitlist
              </button>
            </div>
            <p className="text-sm text-gray-400">
              Join {waitlistCount.toLocaleString()} others already on the waitlist
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Hero;