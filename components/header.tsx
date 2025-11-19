"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Why The Vault?", href: "#why" },
  { label: "Features", href: "#features" },
  { label: "Modules", href: "#modules" },
  { label: "Industries", href: "#industries" },
  { label: "Integration", href: "#integrations" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] bg-white/80 backdrop-blur-xl border-b border-gray-200/70">

      {/* Brand Pattern Background (Subtle) */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #003b66 1px, transparent 1px), radial-gradient(circle at 70% 80%, #ffb500 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      {/* Brand Gradient Bar */}
      <div
        className="absolute inset-x-0 top-0 h-[4px]"
      />

      {/* Inner container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/design-mode/logo.png"
              alt="The Vault Logo"
              className="h-20 w-auto "
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-800 hover:text-[#003b66] font-medium text-[15px] tracking-tight transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#get-quote"
              className="px-6 py-2.5 rounded-full font-medium text-sm text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all"
              style={{ backgroundColor: "#003b66" }}
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden mt-3 pb-3 flex flex-col gap-1 bg-white/90 backdrop-blur-lg rounded-lg shadow-md p-3 border border-gray-200">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-[#003b66] font-medium py-2 rounded-md px-1 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#get-quote"
              className="text-white px-4 py-2 rounded-full font-medium text-sm mt-2 text-center shadow-md"
              style={{ backgroundColor: "#003b66" }}
              onClick={() => setIsOpen(false)}
            >
              Get a Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
