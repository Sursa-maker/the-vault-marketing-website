"use client"

import { useState } from "react"
import { ContactDialog } from "./contact-dialog"

export function CTA() {
  const [dialogOpen, setDialogOpen] = useState<"quote" | "demo" | null>(null)

  return (
    <>
      <section id="get-quote" className="pt-14 md:pt-10 pb-20 md:pb-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-12 md:p-16 text-center text-white" style={{ backgroundColor: "#003b66" }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Warehouse?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of operations leaders who are optimizing their warehouse performance with The Vault.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => setDialogOpen("demo")}
                className="px-8 py-3.5 rounded-full font-semibold text-lg border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all cursor-pointer"
              >
                Schedule a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactDialog isOpen={dialogOpen === "quote"} onClose={() => setDialogOpen(null)} type="quote" />
      <ContactDialog isOpen={dialogOpen === "demo"} onClose={() => setDialogOpen(null)} type="demo" />
    </>
  )
}
