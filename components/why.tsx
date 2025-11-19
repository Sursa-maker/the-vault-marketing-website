import { TrendingUp, Gauge, Award, Users } from "lucide-react"

const whyPoints = [
  {
    icon: TrendingUp,
    title: "Industry-Leading Performance",
    description: "Achieve 40% faster order fulfillment and reduce operational costs by up to 35%.",
  },
  {
    icon: Gauge,
    title: "Proven at Scale",
    description: "Trusted by 500+ enterprises across retail, 3PL, manufacturing, and e-commerce.",
  },
  {
    icon: Award,
    title: "Award-Winning Platform",
    description: "Recognized by Gartner and industry analysts as a leader in WMS solutions.",
  },
  {
    icon: Users,
    title: "Expert Support & Implementation",
    description: "Dedicated teams ensure smooth deployment and continuous optimization.",
  },
]

export function Why() {
  return (
    <section
  id="why"
  className="pt-6 md:pt-10 pb-20 md:pb-10 bg-white scroll-mt-24"
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why The Vault?</h2>
            <p className="text-xl text-gray-600 mb-10">
              The Vault isn't just another warehouse management system. It's a comprehensive logistics transformation
              platform built for modern supply chains.
            </p>

            <div className="space-y-6">
              {whyPoints.map((point, index) => {
                const Icon = point.icon
                return (
                  <div key={index} className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#003b66", color: "white" }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right - Image Gallery */}
          <div className="space-y-4">
            {/* Routing Screenshot */}
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <img
                src="/images/screenshot-202025-11-13-20133410.png"
                alt="The Vault Routing Module - Route optimization and delivery tracking"
                className="w-full object-cover"
              />
            </div>

            {/* Dashboard Screenshot */}
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <img
                src="/images/screenshot-202025-11-13-20133641.png"
                alt="The Vault Dashboard - Real-time analytics and KPI monitoring"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
