"use client";
import { useEffect, useState } from "react";
import RegistrarPartners from "./RegistrarPartners";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);

  useEffect(() => {
    const getWaitlistCount = async () => {
      try {
        const response = await fetch("/api/email");
        if (!response.ok) {
          throw new Error("Failed to fetch waitlist count");
        }
        const data = await response.json();
        const count = data?.user.length;
        setWaitlistCount(count);
      } catch (error) {
        console.error("Error fetching waitlist count:", error);
        // Set a fallback count in case of error
        setWaitlistCount(0);
      }
    };

    getWaitlistCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (result.success) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"],
        });
        setEmail("");
        setWaitlistCount(prev => prev !== null ? prev + 1 : 1);
      } else {
        if (result.error === "Email already exists") {
          toast.success(
            "You're already on our waitlist! Thanks for your enthusiasm!",
          );
          setEmail("");
        } else {
          toast.error("Something went wrong. Please try again.");
          setEmail("");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      data-aos="fade-up"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-[#111111] py-24 text-white"
    >
      <Toaster position="top-center" />
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute left-8 top-8"
      >
        <h1 className="text-3xl font-bold">
          <span className="text-primary">Dom</span>
          <span className="text-white">Sell</span>
        </h1>
      </motion.div>

      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            {/* CHIP DIV */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-md mb-4 flex h-7 items-center whitespace-nowrap rounded-xl border border-gray-700 bg-gradient-to-tr from-gray-950/80 to-gray-800/80 px-2 font-medium leading-5 text-gray-400 shadow-2xl shadow-primary"
            >
              <span className="italic">
                &quot;Let&apos;s ensure, no domain goes into vain!&quot;
              </span>
            </motion.div>

            {/* HERO HEADING */}
            <h1 className="mx-auto py-2 text-3xl font-bold leading-tight md:text-6xl">
              Turn Domains Into Opportunities
              <span className="text-primary"> Buy, Resell and Manage</span>
            </h1>

            {/* HERO SUB-HEADING */}
            <p className="text-md mx-auto max-w-4xl text-gray-300 md:text-xl">
              Don&apos;t let domains sit idle. Resell with ease, buy from top
              registrars, and manage your portfolio all in one place. Make your
              domains work for you!
            </p>
          </div>

          {/* HERO WAITLIST FORM */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg py-6"
          >
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="flow-row flex w-full items-center justify-center gap-x-2 rounded-lg bg-primary p-3 font-semibold text-black transition-colors duration-200 hover:bg-primary/80 md:w-[200px]"
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
            <p className="text-md pt-2 font-normal text-gray-300">
              {waitlistCount === null ? (
                <span className="animate-pulse">Loading waitlist count...</span>
              ) : (
                <>
                  Join{" "}
                  <span className="font-semibold text-primary">
                    {waitlistCount}
                  </span>{" "}
                  others already on the waitlist
                </>
              )}
            </p>
          </motion.form>
        </motion.div>
      </div>

      <RegistrarPartners />
    </section>
  );
};

export default Hero;
