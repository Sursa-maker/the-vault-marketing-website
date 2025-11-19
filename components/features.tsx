import { CheckCircle2, Zap, Eye, Gauge, Lock, TrendingUp, Calendar, BarChart3, Route } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "End-to-End Visibility",
    description: "Every movement, task, and transaction is traceable and transparent.",
    color: "#003b66",
  },
  {
    icon: Zap,
    title: "Automation at Scale",
    description: "Reduce manual work, errors, and turnaround times with intelligent automation.",
    color: "#257ec0",
  },
  {
    icon: CheckCircle2,
    title: "Real-Time Collaboration",
    description: "Unified communication between teams, partners, and clients across your network.",
    color: "#ffb500",
  },
  {
    icon: TrendingUp,
    title: "AI-Powered Decisions",
    description: "Data insights that continuously improve your warehouse operations.",
    color: "#003b66",
  },
  {
    icon: Gauge,
    title: "Future-Ready Flexibility",
    description: "Scale and adapt as your business grows without costly upgrades.",
    color: "#257ec0",
  },
  {
    icon: Lock,
    title: "Enhanced Security",
    description: "Enterprise-grade security with role-based access and compliance tools.",
    color: "#ffb500",
  },
]


export function Features() {
  return (
    <section id="features" className="pt-6 md:pt-10 pb-20 md:pb-10 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Smarter. Faster. Connected.</h2>
          <p className="text-xl text-gray-600">
            The Vault brings together everything your warehouse and logistics operations need in one unified platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: feature.color, color: "white" }}
                >
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
