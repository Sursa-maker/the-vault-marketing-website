import { MapPin, FileText, Calendar, BarChart4, Download, Link2 } from "lucide-react"

const integrations = [
  {
    icon: MapPin,
    title: "Google Maps Platform",
    description: "Advanced routing, real-time ETAs, and live navigation for optimized deliveries.",
    color: "#003b66",
  },
  {
    icon: FileText,
    title: "QuickBooks Online",
    description: "Automated billing, invoice sync, and complete financial transparency.",
    color: "#257ec0",
  },
  {
    icon: Calendar,
    title: "Smart Calendar System",
    description: "Intuitive scheduling for truck dispatch, pickup schedules, and deliveries.",
    color: "#ffb500",
  },
  {
    icon: BarChart4,
    title: "Advanced Analytics",
    description: "Real-time charts and KPI dashboards for data-driven decision making.",
    color: "#003b66",
  },
  {
    icon: Download,
    title: "Excel Export",
    description: "One-click data export for analysis, audits, and compliance reporting.",
    color: "#257ec0",
  },
  {
    icon: Link2,
    title: "Open Architecture",
    description: "API and EDI integration for ERP, CRM, and third-party tools.",
    color: "#ffb500",
  },
]

export function Integrations() {
  return (
    <section id="integrations" className="pt-6 md:pt-10 pb-20 md:pb-10 bg-gray-50 scroll-mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Seamless Integrations</h2>
          <p className="text-xl text-gray-600">
            One ecosystem. Endless connections. The Vault connects with the tools you already use.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-all"
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: integration.color, color: "white" }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{integration.title}</h3>
                <p className="text-gray-600">{integration.description}</p>
              </div>
            )
          })}
        </div>

        {/* Additional Integrations Note */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <p className="text-gray-700 mb-4">
            <strong>And many more...</strong> The Vault integrates with CRM & ERP systems, Communication APIs, Cloud
            Storage, IoT Devices, Payment Gateways, and Advanced Analytics platforms.
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Explore all integrations →
          </button>
        </div>
      </div>
    </section>
  )
}
