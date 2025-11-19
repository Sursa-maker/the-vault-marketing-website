import { Warehouse, Truck, Package, Factory, Car, Handshake } from "lucide-react"

const industries = [
  {
    icon: Handshake,
    title: "White Glove Delivery",
    description: "Premium doorstep delivery with special handling, assembly, setup, and customer-first care.",
  },
  {
    icon: Truck,
    title: "Logistics & Transportation",
    description: "Automate freight management, route planning, and delivery tracking for optimal efficiency.",
  },
  {
    icon: Package,
    title: "3PL Providers",
    description: "Manage multiple clients with custom pricing and automated billing.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    description: "Connect inbound, inventory control, and outbound in one intuitive dashboard.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Supply",
    description: "Track materials across multiple plants and ensure complete supply chain control.",
  },
  {
    icon: Car,
    title: "Automotive & Parts",
    description: "Precision logistics for spare parts with component tracking and claim management.",
  },
]

export function Industries() {
  return (
    <section id="industries" className="pt-6 md:pt-10 pb-20 md:pb-10 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Built for Every Industry</h2>
          <p className="text-xl text-gray-600">
            Whether you manage a single warehouse or multiple facilities, The Vault scales effortlessly across industries.
          </p>
        </div>

        {/* Horizontal Scroll + Hidden Scrollbar */}
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-hide">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="min-w-[200px] h-[300px] p-6 bg-white rounded-lg border border-white-10 hover:shadow-md transition-all text-center flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center mb-4">
                    <div
                      className="p-3 rounded-lg"
                      style={{
                        backgroundColor: index % 3 === 0 ? "#003b66" : index % 3 === 1 ? "#257ec0" : "#ffb500",
                        color: "white",
                      }}
                    >
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
                  <p className="text-sm text-gray-600">{industry.description}</p>
                </div>
              </div>

            )
          })}
        </div>

      </div>
    </section>
  )
}
