"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const waitlistCount = 142; // This should be fetched from your backend

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your waitlist submission logic here
  };

  return (
    <section
      data-aos="fade-up"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-[#111111] py-24 text-white"
    >
      <Image
        src="/tube.svg"
        alt="Tubes"
        width={200}
        height={200}
        className="absolute left-0 top-0 w-20 md:w-44"
      />
      <div className="container mx-auto max-w-6xl px-4">
        <div className="space-y-3 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="text-md flex h-7 items-center whitespace-nowrap rounded-xl border border-gray-700 bg-gradient-to-tr from-gray-950/80 to-gray-800/80 px-2 font-medium leading-5 text-gray-400 shadow-2xl shadow-primary">
              <span className="italic">
                &quot;Let&apos;s ensure, no domain goes into vain!&quot;
              </span>
            </div>
            <h1 className="mx-auto w-[90%] text-3xl font-bold leading-tight md:text-6xl">
              Turn Domains Into Opportunities <br /> &lt;Buy, Resell, and
              Manage/&gt;
            </h1>

            <p className="text-md mx-auto max-w-5xl text-gray-300 md:text-xl">
              Unlock the value of unused domains with our platform. Resell
              easily, buy competitively from top registrars, and manage your
              portfolio in one place. Make your domains work for you!
            </p>
          </div>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md py-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="flow-row flex items-center gap-x-2 rounded-lg bg-primary px-5 py-3 font-semibold text-black transition-colors duration-200 hover:bg-primary/80"
              >
                Join the Waitlist
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
            <p className="text-md pt-2 font-normal text-gray-400">
              Join {waitlistCount.toLocaleString()} others already on the
              waitlist
            </p>
          </form>

          <div className="flex flex-col justify-between gap-y-6 md:flex-row md:gap-x-3">
            <div className="relative h-80 w-full overflow-hidden rounded-xl bg-cyan-600/40 md:h-96 md:w-[49%]">
              <Image
                src="/dummyMobileApp.png"
                alt="Mobile App Preview"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="h-80 w-full rounded-xl bg-emerald-600/40 md:h-96 md:w-[49%]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
