import { BarChart3, Users, Package, Truck, Settings, DollarSign, Calendar, LineChart, Route } from "lucide-react"

const modules = [
  {
    number: "1",
    icon: BarChart3,
    title: "Dashboard / KPI",
    description:
      "Complete overview of your warehouse and logistics operations with real-time analytics and KPI tracking.",
  },
  {
    number: "2",
    icon: Users,
    title: "Admin & Role-Based Access",
    description: "Secure and flexible access control with multiple user types and tailored permissions.",
  },
    {
    number: "3",
    icon: Truck,
    title: "Inbound & Outbound Operations",
    description:
      "Manage end-to-end warehouse flow—from receiving goods to dispatching deliveries—with unified tracking, scheduling, and process automation.",
  },
  {
    number: "4",
    icon: Settings,
    title: "Inventory Management",
    description: "Complete control over warehouse stock with live tracking and instant visibility.",
  },
  {
    number: "5",
    icon: DollarSign,
    title: "Billing & Accounting",
    description: "Automated billing with QuickBooks integration for seamless financial operations.",
  },
  {
    number: "6",
    icon: Calendar,
    title: "Self Scheduling Module",
    description:
      "Empower clients and internal teams to schedule pickups, deliveries, and tasks independently with smart automation.",
  },
  {
    number: "7",
    icon: Route,
    title: "Routing Optimization",
    description:
      "Optimize routes automatically for faster deliveries, reduced fuel costs, and improved operational efficiency.",
  },
  {
    number: "8",
    icon: LineChart,
    title: "Advanced Reporting",
    description:
      "Generate customizable reports with real-time insights, trends, performance metrics, and detailed analytics.",
  },
]

export function Modules() {
  return (
    <section id="modules" className="pt-6 md:pt-10 pb-20 md:pb-10 bg-gray-50 scroll-mt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Features</h2>
          <p className="text-xl text-gray-600">
            Explore the powerful features that make The Vault your ultimate Warehouse Management System.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon
            return (
              <div
                key={index}
                className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-all bg-gray-50 hover:bg-white"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: "#003b66" }}
                  >
                    {module.number}
                  </div>
                  <Icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
