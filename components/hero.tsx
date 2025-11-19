"use client"

import { useState } from "react"
import { ContactDialog } from "./contact-dialog"

export function Hero() {
  const [dialogOpen, setDialogOpen] = useState<"quote" | "demo" | null>(null)

  const handleGetStarted = () => {
    window.open("https://demo.vaultsinc.com/login", "_blank")
  }

  const handleWatchDemo = () => {
    window.open("https://demo.vaultsinc.com/login", "_blank")
  }

  return (
    <>
      <section className="relative pt-12 md:pt-10 pb-8 md:pb-12 overflow-hidden">
        {/* Background gradient accent */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ backgroundColor: "#ffb500" }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content */}
            <div>
              {/* Main Heading */}
             <h1
  className="
    text-4xl md:text-6xl 
    font-extrabold 
    leading-[1.1] 
    tracking-tight 
    text-gray-900 
    mb-8
  "
>
  <span className="block">
    From <span className="text-[#003b66]">first mile</span> to last - delivering
  </span>

  <span className="block mt-1 text-[#003b66]">
    excellence
  </span>

  <span className="block mt-1">
    at every stage
  </span>
</h1>


              {/* Subheading */}
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed text-balance">
                The Vault is a next-generation Warehouse Management System built for speed, precision and control. Ditch
                the delays, errors and blind spots of traditional logistics.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button
                  onClick={handleWatchDemo}
                  className="px-8 py-3 rounded-full font-semibold border-2 border-gray-300 text-gray-900 hover:border-gray-400 transition-colors text-lg"
                >
                 Scheduled  Demo
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-12 md:mt-16">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: "#003b66" }}>
                    99%
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mt-2">Accuracy Rate</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: "#257ec0" }}>
                    24/7
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mt-2">Support Available</p>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold" style={{ color: "#ffb500" }}>
                    10k+
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm mt-2">Operations Daily</p>
                </div>
              </div>
            </div>

            <div className="order-first md:order-last">
              <img
                src="/images/all-devices-white-20-281-29.png"
                alt="The Vault Warehouse Management System Dashboard on multiple devices"
                className="w-full h-auto drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <ContactDialog isOpen={dialogOpen === "quote"} onClose={() => setDialogOpen(null)} type="quote" />
      <ContactDialog isOpen={dialogOpen === "demo"} onClose={() => setDialogOpen(null)} type="demo" />
    </>
  )
}
